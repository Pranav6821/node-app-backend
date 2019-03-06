var express = require('express');

var Symptoms_user_list=require('../../models/symptoms-user');

var app =express();

symptoms_user_list = function(req , res){

  Symptoms_user_list.find({_id:req.params._id}).then((todo) => {
  res.status(200).send(todo);
  },(err) => {
    console.log('Unable to fetch Onboarding' ,err)
  })
}

module.exports = symptoms_user_list;
