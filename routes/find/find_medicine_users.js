var express = require('express');

var Medicine_list=require('../../models/medicine-user');

var app =express();

medicine_list = function(req , res){

  Medicine_list.find().then((todo) => {
  res.send(JSON.stringify(todo,undefined,2));
  },(err) => {
    console.log('Unable to fetch Onboarding' ,err)
  })
}

module.exports = medicine_list;
