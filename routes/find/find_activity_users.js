var express = require('express');

var Activity_user_list=require('../../models/activity-user');

var app =express();

activity_user_list = function(req , res){

  Activity_user_list.find({Users_id:req.params._id}).then((todo) => {
  res.status(200).send(todo);
  },(err) => {
    console.log('Unable to fetch Onboarding' ,err)
  })
}

module.exports = activity_user_list;
