var express = require('express');

var Symptoms_list=require('../../models/symptoms');

var app =express();

symptoms_list = function(req , res){

  Symptoms_list.find().then((todo) => {
  res.send(JSON.stringify(todo,undefined,2));
  },(err) => {
    console.log('Unable to fetch Onboarding' ,err)
  })
}

module.exports = symptoms_list;
