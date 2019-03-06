var express = require('express');

var Medicine_list=require('../../models/medicine');

var app =express();

medicine_list = function(req , res){

  Medicine_list.find().then((todo) => {
  res.status(200).send(todo);
  },(err) => {
    console.log('Unable to fetch Onboarding' ,err)
  })
}

module.exports = medicine_list;
