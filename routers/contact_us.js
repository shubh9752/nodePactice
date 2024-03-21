const express=require('express');
const path=require('path');
const router=express.Router();
const productsController=require('../controllers/products')

router.get('/contact-us',productsController.getUserdetails)
router.get('/success',productsController.saveUserDetails);

module.exports=router;