var express = require('express');

var Users_list=require('../../models/users');

var app =express();

users_list = function(req , res){

  Users_list.find({_id:req.params._id}).then((todo) => {
  res.status(200).send(todo);
  },(err) => {
    console.log('Unable to fetch Onboarding' ,err)
  })
}

module.exports = users_list;
