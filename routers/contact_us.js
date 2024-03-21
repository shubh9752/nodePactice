const express=require('express');
const path=require('path');
const router=express.Router();

router.get('/contact-us',(req,res)=>{
    console.log(`contact us requested`);
    // res.send(`<form action="/admin/add-product" method="POST"><input type="text" name="title" placeholder="enter product" /><input type="number" name="quantity" placeholder="enter product quantity or size" /><input type="submit" value="submit" /></form>`)
    res.sendFile(path.join(__dirname,"../","views","contact-us.html"));
})
router.get('/success',(req,res)=>{
    console.log(req.body);
    res.sendFile(path.join(__dirname,"../","views","success.html"));
});

module.exports=router;