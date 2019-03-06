
let express = require('express');
var Daily_triggers =require('../../models/daily_triggers');
var date1;
let app =express();


  count_daily_triggers = function(req , res){

    date1 = new Date()
  date1.setDate(date1.getDate() + 1);
  date1.setHours(0,0,0,0);
    console.log(date1);
    Daily_triggers.aggregate([{$match:{Users_id:req.params._id}},{$unwind:"$Daily"},
    {$match:{"Daily.Triggers_Date":date1}},
    {"$group":{_id:"$Daily.Triggers_Date","Total":{$sum:"$Daily.Frequency"}}}]).then((todo) => {
    res.status(200).send(todo);
    },(err) => {
      console.log('Unable ' ,err)
    })
  }


module.exports = count_daily_triggers;
