var express = require('express');

var Medicine_strength_list=require('../../models/medicine-strength');

var app =express();

medicine_strength_list = function(req , res){

  Medicine_strength_list.find({Medicine_id:req.body.Medicine_id}).then((todo) => {
  res.status(200).send(todo);
  },(err) => {
    console.log('Unable to strength list' ,err)
  })
}

module.exports = medicine_strength_list;
