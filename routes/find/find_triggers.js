var express = require('express');

var Triggers_list=require('../../models/triggers');

var app =express();

triggers_list = function(req , res){

  Triggers_list.find().then((todo) => {
  res.send(JSON.stringify(todo,undefined,2));
  },(err) => {
    console.log('Unable to fetch Onboarding' ,err)
  })
}

module.exports = triggers_list;
