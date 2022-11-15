'use strict';
require('dotenv').config()
const mongoose = require('mongoose');

 module.exports=mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('connected to database')
  })
  .catch((err) => {
    console.log(err)
  }) 

