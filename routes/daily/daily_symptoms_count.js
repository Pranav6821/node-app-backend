
let express = require('express');
var Daily_symptoms =require('../../models/daily_symptoms');
var date1;
let app =express();


  count_daily_symptoms = function(req , res){

    date1 = new Date()
  date1.setDate(date1.getDate() + 1);
  date1.setHours(0,0,0,0);
    console.log(date1);
    Daily_symptoms.aggregate([{$match:{Users_id:req.params._id}},{$unwind:"$Daily"},
    {$match:{"Daily.Symptoms_Date":date1}},
    {"$group":{_id:"$Daily.Symptoms_Date","Total":{$sum:"$Daily.Frequency"}}}]).then((todo) => {
      console.log(todo);
    res.status(200).send(todo);
    },(err) => {
      console.log('Unable ' ,err)
    })
  }


module.exports = count_daily_symptoms;
