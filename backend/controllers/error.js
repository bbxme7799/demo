exports.get404 = (req, res , next) =>{
    // res.status(404).sendFile(path.join(__dirname, 'views', '404.html')); //ไม่มี ../เพราะ app.js อยู่นอกสุด สามารถเข้าไปยัง views ได้ทันที ส่วน ที่อยู่ในโฟลเดอร์ ต้องออกมาจากโฟลเดอร์แล้วเข้าไป
    res.status(404).render('404', { pageTitle: 'Page Not Found', path: '/404'})
};