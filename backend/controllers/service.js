// const Product = require('../models/product')
const axios = require('axios');
const apikey = "445ffcff1322193be0a307e4a8918716";
const action = "services";
exports.getService = async (req, res, next) => {
    try {
    const response = await axios.get(`https://iplusview.store/api?key=${apikey}&action=${action}`);
    console.log(response.data);
    res.status(200).json(response.data);
    } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong' });
    }
    }

exports.postService = async (req, res,next) => {
    const { service,link, rate } = req.body;
    console.log("🚀 ~ file: service.js:19 ~ req.body:", req.body);
  
    try {
      const response = await axios.post(
        `http://iplusview.store/api?key=${apikey}&action=add&service=${service}&link=${link}&quantity=${rate}`
      );
      console.log(response.data);
      res.status(200).json(response.data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Something went wrong" });
      return;
    }
  
      };
      