const express=require('express');
const router=express.Router();

router.get('/add-product',(req,res)=>{
    console.log(`add product requested`);
    res.send(`<form action="/admin/add-product" method="POST"><input type="text" name="title" placeholder="enter product" /><input type="number" name="quantity" placeholder="enter product quantity or size" /><input type="submit" value="submit" /></form>`)
})
router.post('/add-product',(req,res)=>{
    console.log(req.body);
    res.redirect('/shop');
});

module.exports=router;