var express = require('express');

var Symptoms_list_by_id=require('../../models/symptoms');

var app =express();

symptoms_list_by_id = function(req , res){

  Symptoms_list_by_id.find({_id:req.body.Symptoms_id}).then((todo) => {
  res.status(200).send(todo);
  },(err) => {
    console.log('Unable to fetch Onboarding' ,err)
  })
}

module.exports = symptoms_list_by_id;
