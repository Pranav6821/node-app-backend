var express = require('express');

var Users_list=require('../../models/users');

var app =express();

users_list = function(req , res){

  Users_list.find().then((todo) => {
  res.send(JSON.stringify(todo,undefined,2));
  },(err) => {
    console.log('Unable to fetch Onboarding' ,err)
  })
}

module.exports = users_list;
