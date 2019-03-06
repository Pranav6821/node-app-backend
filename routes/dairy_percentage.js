
const addSubtractDate = require("add-subtract-date");
let express = require('express');
var Dairy_percentage =require('../models/daily_symptoms');
var date1;
var date2;
let app =express();

dairy_percentage = function(req , res){
  date1 = new Date()
  date1.setDate(date1.getDate() + 1);
  date1.setHours(0,0,0,0);
  date2 = new Date()
  date2.setDate(date2.getDate() - 29);
  date2.setHours(0,0,0,0);
  console.log(date1);
  console.log(date2);

  Dairy_percentage.aggregate([{$match:{Users_id:req.params._id}},{$unwind:"$Daily"},
  {$match:{$and:[{"Daily.Symptoms_Date":{$lte:date1}},
  {"Daily.Symptoms_Date":{$gte:date2}}]}},
  {"$group":{_id:"$Daily.Symptoms_Date","Total":{$sum:"$Daily.Frequency"}}}])
  .then((todo) => {
    // var obj = [];
    // var sum = 0;
    // for(var i=0;i<todo.length;i++){
    //   sum += todo[i].Total;
    // }

    var dairy_filled = todo.length;
    console.log(dairy_filled);

    var dairy_completed_per = ((dairy_filled/30)*100);

    res.status(200).send({"per": dairy_completed_per});
    },(err) => {
      console.log('Unable ' ,err)
    })
  }


module.exports = dairy_percentage;
