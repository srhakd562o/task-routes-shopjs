const express = require('express');

const router = express.Router();
// /admin/add-product => GET
router.get('/add-product', (req, res, next)=>{
    console.log('In  another the middlware')
    //res.send('<h1>The "Add Product" Page </h1>');
    res.send('<form action = "/admin/product" method ="POST"><label>Enter the Product name:</label><input type="text" name="title"><br><br><label>Enter the quantity</label><input type="number" name="qunatity"><button type="submit">Add Product</button></form>');
});
// /admin/add-product => POST
router.post('/product', (req,res,next)=>{
    console.log(req.body);
    res.redirect('/shop'); // this function is used to redirect to route
})

module.exports = router;
