const Sequelize=require('sequelize');
const sequelize=require('../util/database');
const Product=sequelize.define('product',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    User_name:Sequelize.STRING,
    phone_no:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false,
    }

});
module.exports=Product;