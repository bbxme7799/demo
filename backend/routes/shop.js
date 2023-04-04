const path = require('path');
const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router(); //สร้าง obj เราเตอร์ โดยการเรียก express เก็บใน router
 
//router เป็นฟังก์ชั่น
// router.get('/', (req, res, next) => { //อาร์กิวเมนต์  สามารถเพิ่มเส้นทางที่จุดเริ่มต้น สามารถดูเพิ่มเติมจาก Express website 
//     //ฟังก์ชั่นที่ได้รับที่นี่ จะถูกดำเนินการ เพื่อให้คำขอเดินทางไปยัง มิดเดิลแวร์ถัดไป
//     //  res.sendFile('/views/shop.html'); //หากจะส่งไฟล์โดยตรง โดยระบุพาธไปโฟลเดอร์ ไม่สามารถทำได้ต้อง import path
//     console.log(adminData.products);
//     // res.sendFile(path.join(rootDir, 'views', 'shop.html')); ไม่ใช้เนื่องจากใช้ Templating engine แทน html
//     const products = adminData.products;
//     // res.render('shop', {prods: products, docTitle: 'Shop'});//เราสามารถส่ง อากิวเมนต์ที่สองไปยัง เมธอด render ได้ ทำให้เราสามารถส่งผ่านข้อมูลที่ควรเพิ่มเข้าไปใน views
    
// });
router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

//เป็นการบอก router ว่าจะมีเซ็กเมนต์ตัวแปรบางส่วนโดยการเพิ่มโคลอน และเพิ่มชื่อ productId จะสามารถดึงข้อมูลจาก url โดย controller จะนำไปใช้งาน
router.get('/products/:productId', shopController.getProduct);

router.get('/cart', shopController.getCart);

router.get('/orders', shopController.getOrders);

router.get('/checkout', shopController.getCheckout);


module.exports = router;