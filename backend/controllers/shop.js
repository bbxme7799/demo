const Product = require('../models/product')

// exports.getProducts = (req, res, next) => {
//     Product.fetchAll(prodcuts => { //สร้างการ CALLBACK และส่งผ่านเพื่อดึงข้อมูลทั้งหมด  ถ้าดึงเสร็จอาร์กิวเมนต์ callback ที่นี่จะอ้างฟังก์ชั่นที่ไม่ระบุตัวตน ที่สร้างผ่านเพื่อดึงข้อมูล
//         res.render('shop', { //shop ส่วนนี้คือส่งไปที่ไฟล์ shop ที่กำหนดจาก app.js เชน่ใช้ ejs ก็จะส่งไปที่ ejs  โดยทำการส่งเป็น Objectไป จะมี property ซึ่งเป็นตัวแปร และค่า ตามหลัง
//           prods: products,
//           pageTitle: 'Shop',
//           path: '/',
//           hasProducts: products.length > 0,
//           activeShop: true,
//           productCSS: true
//         });
//     });
//   }
exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
      res.render('shop/product-list', {
        prods: products,
        pageTitle: 'All Products',
        path: '/products'
      });
    });
  };

exports.getProduct = (req, res, next) => {
    const prodId = req.params.productId; // productId ดึงข้อมูลมาจาก route
    Product.findById(prodId, product => {
      console.log(product);
    });
    res.redirect('/');
}; 

//ได้รับฟังก์ชั่น middleware ที่นี่
exports.getIndex = (req, res,next) => {
  Product.fetchAll(products => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/'
    });
  });
};

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart'
  });
};

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};


exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
}