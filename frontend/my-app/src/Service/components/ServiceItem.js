import React, { useEffect, useState } from "react";
import axios from "axios";

const ServiceList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);

  const filteredData = data.filter(
    (item) =>
      item.category ===
        "【﻿𝓕𝓻𝓮𝓮】+【﻿𝗣𝗿𝗼𝗺𝗼𝘁𝗶𝗼𝗻𝗮𝗹】🎁 บริการฟรี + บริการส่งเสริมการขาย" &&
      item.rate === 0
  );

  const [selectedOption, setSelectedOption] = useState("");
  const findata = () => {
    if (selectedOption !== "") {
      const finddata = filteredData.find(
        (item) => Number(item.service) === Number(selectedOption)
      );
      if (finddata) {
        // console.log(
        //   "🚀 ~ file: ServiceItem.js:21 ~ findata ~ finddata:",
        //   finddata.description
        // );
        const descriptionWithNewline = finddata.description.replace(
          /&nbsp;/g,
          "\n"
        );
        return descriptionWithNewline;
      }
    }
    return "";
  };

  const findMin = () => {
    if (selectedOption !== "") {
      const finddata = filteredData.find(
        (item) => Number(item.service) === Number(selectedOption)
      );
      // console.log(
      //   "🚀 ~ file: ServiceItem.js:50 ~ findMinMax ~ finddata:",
      //   finddata
      // );

      if (finddata) {
        // check if finddata is defined
        return finddata.min; // return the min property of finddata
      }
    }
  };

  const findMax = () => {
    if (selectedOption !== "") {
      const finddata = filteredData.find(
        (item) => Number(item.service) === Number(selectedOption)
      );
      // console.log(
      //   "🚀 ~ file: ServiceItem.js:50 ~ findMinMax ~ finddata:",
      //   finddata
      // );

      if (finddata) {
        // check if finddata is defined
        return finddata.max; // return the min property of finddata
      }
    }
  };

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    setFormData({ ...formData, service: event.target.value });
  };

  const [formData, setFormData] = useState({
    service: "",
    link: "",
    rate: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      "🚀 ~ file: ServiceItem.js:99 ~ handleSubmit ~ formData:",
      formData
    );
    fetch("http://localhost:5000/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));

    setFormData({ link: "", rate: "" });
  };

  return (
    <React.Fragment>
      <section className="max-w-4xl mx-auto my-10 bg-white p-10 rounded-xl shadow shadow-slate-300">
        <span>บริการ</span>
        <select
          value={selectedOption}
          onChange={handleChange}
          className="my-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
        >
          <option value="" disabled>
            Choose a Service
          </option>
          {filteredData.map((item) => (
            <option key={item.service} value={item.service}>
              {item.name} - <br />
              {item.rate} บาท
            </option>
          ))}
        </select>
        <span>รายละเอียด</span>
        <article className="mt-2 p-8 bg-white max-h-full overflow-y-auto border-2 border-gray-200 shadow sm:p-2 dark:bg-gray-200 dark:border-gray-200">
          <p className="whitespace-pre text-xs">
            <div dangerouslySetInnerHTML={{ __html: findata() }}></div>
          </p>
        </article>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              for="large-input"
              className="block mb-2 text-sm font-medium text-gray-400 dark:text-black"
            >
              ลิงก์
            </label>
            <input
              type="text"
              id="link"
              name="link"
              value={formData.link}
              onChange={handleInputChange}
              className="my-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
            />
          </div>

          <div className="mb-6">
            <label
              for="large-input"
              className="block mb-2 text-sm font-medium text-gray-400 dark:text-black"
            >
              ปริมาณ
            </label>
            <input
              type="text"
              id="rate"
              name="rate"
              value={formData.rate}
              onChange={handleInputChange}
              className="my-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200 text-black"
            />
            <span className="text-red-900 pr-2 text-xs">
              ขั้นต่ำ :{findMin()}
            </span>
            <span>-</span>
            <span className="pl-2 text-xs">สูงสุด :{findMax()}</span>
          </div>

          <label
            for="website-admin"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            ค่าใช้จ่าย
          </label>
          <div className="flex">
            <span className="my-2  flex h-12 items-center px-3 text-sm text-gray-200 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-400 dark:text-gray-80">
              ฿
            </span>
            <input
              type="text"
              id="website-admin"
              className="my-2 flex h-12 w-full items-center justify-center rounded-r-lg border bg-white/0 p-3 text-sm outline-none border-gray-200"
            />
          </div>
          <div className="grid grid-cols-6 gap-4">
            <button
              type="submit"
              className="col-end-7 col-span-0 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              ยืนยันคำสั่งซื้อ
            </button>
          </div>
        </form>
      </section>
    </React.Fragment>
  );
};

export default ServiceList;
