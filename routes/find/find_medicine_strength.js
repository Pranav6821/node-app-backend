var express = require('express');

var Medicine_strength_list=require('../../models/medicine-strength');

var app =express();

medicine_strength_list = function(req , res){

  Medicine_strength_list.find().then((todo) => {
  res.send(JSON.stringify(todo,undefined,2));
  },(err) => {
    console.log('Unable to fetch Onboarding' ,err)
  })
}

module.exports = medicine_strength_list;
