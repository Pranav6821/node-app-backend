var express = require('express');

var Medicine_list=require('../../models/medicine-user');

var app =express();

medicine_list = function(req , res){

  Medicine_list.find({_id:req.params._id}).then((todo) => {
  res.status(200).send(todo);
  },(err) => {
    console.log('Unable to fetch Onboarding' ,err)
  })
}

module.exports = medicine_list;
