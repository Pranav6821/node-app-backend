var express = require('express');


var Activity_list=require('../../models/activity');

var app =express();

activity_list = function(req , res){

  Activity_list.find().then((todo) => {
  res.send(JSON.stringify(todo,undefined,2));
  },(err) => {
    console.log('Unable to fetch Onboarding' ,err)
  })
}

module.exports = activity_list;
