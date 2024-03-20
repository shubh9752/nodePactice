const express=require('express');
const app=express();

const bodyParser=require('body-parser');
const adminRoute=require('./routers/admin');
const shopRoute=require('./routers/shop');
// console.log(app);

app.use(bodyParser.urlencoded({extended:false}));
// app.use(bodyParser.json());
app.use('/admin',adminRoute);

app.use('/shop',shopRoute);

app.use('*',(req,res)=>{
    res.status(404).send(`<h1>page not found</h1>`);
})


app.listen(8080,()=>{
    console.log('Server is running on port 8080');
})