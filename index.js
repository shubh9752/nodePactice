const express=require('express');
const app=express();
const path=require('path')

const bodyParser=require('body-parser');
const adminRoute=require('./routers/admin');
const shopRoute=require('./routers/shop');
const contact_us=require('./routers/contact_us');
const errorController=require('./controllers/error')
// console.log(app);

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));
// app.use(bodyParser.json());
app.use('/admin',adminRoute);

app.use('/shop',shopRoute);

app.use(contact_us);

app.use('*',errorController.getError)


app.listen(8080,()=>{
    console.log('Server is running on port 8080');
})