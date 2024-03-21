
const path=require('path');

exports.getAddProducts=(req,res)=>{
    console.log(`add product requested`);
    // res.send(`<form action="/admin/add-product" method="POST"><input type="text" name="title" placeholder="enter product" /><input type="number" name="quantity" placeholder="enter product quantity or size" /><input type="submit" value="submit" /></form>`)
    res.sendFile(path.join(__dirname,"../","views","add-product.html"));
};
exports.postAddProducts=(req,res)=>{
    console.log(req.body);
    res.redirect('/shop');
}

exports.getProducts=(req,res)=>{
    res.sendFile(path.join(__dirname,'../','views','shop.html'));
};

exports.getUserdetails=(req,res)=>{
    console.log(`contact us requested`);
    // res.send(`<form action="/admin/add-product" method="POST"><input type="text" name="title" placeholder="enter product" /><input type="number" name="quantity" placeholder="enter product quantity or size" /><input type="submit" value="submit" /></form>`)
    res.sendFile(path.join(__dirname,"../","views","contact-us.html"));
};

exports.saveUserDetails=(req,res)=>{
    console.log(req.body);
    res.sendFile(path.join(__dirname,"../","views","success.html"));
};