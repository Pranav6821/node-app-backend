var express = require('express');

var Activity_user_list=require('../../models/activity-user');

var app =express();

activity_user_list = function(req , res){

  Activity_user_list.find().then((todo) => {
  res.send(JSON.stringify(todo,undefined,2));
  },(err) => {
    console.log('Unable to fetch Onboarding' ,err)
  })
}

module.exports = activity_user_list;
