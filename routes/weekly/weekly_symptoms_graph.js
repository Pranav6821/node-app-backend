
const addSubtractDate = require("add-subtract-date");
let express = require('express');
var Weekly_symptoms_graph =require('../../models/daily_symptoms');
var date1;
var date2;
let app =express();

weekly_symptoms_graph = function(req , res){
  date1 = new Date()
  date1.setDate(date1.getDate() + 1);
  date1.setHours(0,0,0,0);
  date2 = new Date()
  date2.setDate(date2.getDate() - 6);
  date2.setHours(0,0,0,0);
  console.log(date1);
  console.log(date2);

  Weekly_symptoms_graph.aggregate([{$match:{Users_id:req.params._id}},{$unwind:"$Daily"},
  {$match:{$and:[{"Daily.Symptoms_Date":{$lte:date1}},
  {"Daily.Symptoms_Date":{$gte:date2}}]}},
  {"$group":{_id:"$Daily.Symptoms_Date","Total":{$sum:"$Daily.Frequency"}}}])
  .then((todo) => {
    res.status(200).send(todo);
    },(err) => {
      console.log('Unable ' ,err)
    })
  }


module.exports = weekly_symptoms_graph;
