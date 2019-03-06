var express = require('express');

var Symptoms_list=require('../../models/symptoms');

var app =express();

symptoms_list = function(req , res){

  Symptoms_list.find().then((todo) => {
  res.status(200).send(todo);
  },(err) => {
    console.log('Unable to fetch Onboarding' ,err)
  })
}

module.exports = symptoms_list;
