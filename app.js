const express=require('express');
const bodyParser=require('body-parser');
const path=require('path');
const app=express();
const sequelize=require('./util/database')
const admin=require('./routes/admin');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'views')));
app.use(admin);


sequelize.sync()
  .then(result => {
   app.listen(3000);   
    })
  .catch(err => {
    console.error('Error syncing database:', err);
  });