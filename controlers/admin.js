const {where}=require('sequelize');
//const Product=require('../models/product');
const Product = require('../models/product');

exports.postProduct=(req,res,next)=>{
    const {username,phone,email}=req.body;
    console.log("doing nothing")
    console.log(req.body);
    Product.create({
        User_name: username,
        phone_no:phone,
        email:email,
    }).then(result=>{
        console.log('User Created');
        res.redirect('/')
    }).catch(err=>{
        console.log(err);
    })
};

exports.getUsers = (req, res, next) => {
    Product.findAll()
        .then(users => {
            res.status(200).json(users);  // Send users as JSON
        })
        .catch(err => {
            console.error('Error fetching users:', err);
            //res.status(500).json({ message: 'Error fetching users.' });
        });
};

exports.deleteUser = (req, res, next) => {
    const userId = req.params.id;

    Product.destroy({ where: { id: userId } })
        .then(result => {
            if (result) {
                res.status(200).json({ message: 'User deleted successfully!' });
            } else {
                res.status(404).json({ message: 'User not found.' });
            }
        })
        .catch(err => {
            console.error('Error deleting user:', err);
            res.status(500).json({ message: 'Error deleting user.' });
        });
};