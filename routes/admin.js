const path = require('path');

const express = require('express');
const admincontroler=require('../controlers/admin');
 
const router=express.Router();

router.post('/admin',admincontroler.postProduct);
router.get('/users', admincontroler.getUsers);
router.delete('/users/:id', admincontroler.deleteUser);
module.exports=router;