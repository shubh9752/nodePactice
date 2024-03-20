const express=require('express');
const app=express();
const bodyParser=require('body-parser');
// console.log(app);

app.use(bodyParser.urlencoded({extended:false}));
// app.use(bodyParser.json());

app.get('/add-product',(req,res)=>{
    console.log(`add product requested`);
    res.send(`<form action="/product" method="POST"><input type="text" name="title" placeholder="enter product" /><input type="number" name="quantity" placeholder="enter product quantity or size" /><input type="submit" value="submit" /></form>`)
})
app.post('/product',(req,res)=>{
    console.log(req.body);
    res.redirect('/');
});
app.use('/',(req,res)=>{
    res.send('<h2>Product added succesfully</h2>')
})
app.listen(8080,()=>{
    console.log('Server is running on port 8080');
})