var express = require('express');

var Allergies_list_by_id=require('../../models/allergies');

var app =express();

allergies_list_by_id = function(req , res){

  Allergies_list_by_id.find({_id:req.body.Allergies_id}).then((todo) => {
  res.status(200).send(todo);
  },(err) => {
    console.log('Unable to fetch Onboarding' ,err)
  })
}

module.exports = allergies_list_by_id;
