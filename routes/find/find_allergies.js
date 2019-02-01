var express = require('express');

var Allergies_list=require('../../models/allergies');

var app =express();

allergies_list = function(req , res){

  Allergies_list.find().then((todo) => {
  res.send(JSON.stringify(todo,undefined,2));
  },(err) => {
    console.log('Unable to fetch Onboarding' ,err)
  })
}

module.exports = allergies_list;
