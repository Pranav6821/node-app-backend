var express = require('express');

var Triggers_list_by_id=require('../../models/triggers');

var app =express();

triggers_list_by_id = function(req , res){

  Triggers_list_by_id.find({_id:req.body.Triggers_id}).then((todo) => {
  res.status(200).send(todo);
  },(err) => {
    console.log('Unable to fetch Onboarding' ,err)
  })
}

module.exports = triggers_list_by_id;
