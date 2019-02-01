var express = require('express');

var Symptoms_user_list=require('../../models/symptoms-user');

var app =express();

symptoms_user_list = function(req , res){

  Symptoms_user_list.find().then((todo) => {
  res.send(JSON.stringify(todo,undefined,2));
  },(err) => {
    console.log('Unable to fetch Onboarding' ,err)
  })
}

module.exports = symptoms_user_list;
