
const addSubtractDate = require("add-subtract-date");
let express = require('express');
var Monthly_triggers_count =require('../../models/daily_triggers');
var date1;
var date2;
let app =express();

monthly_triggers_count = function(req , res){
  date1 = new Date()
  date1.setDate(date1.getDate() + 1);
  date1.setHours(0,0,0,0);
  date2 = new Date()
  date2.setDate(date2.getDate() - 29);
  date2.setHours(0,0,0,0);
  console.log(date1);
  console.log(date2);

  Monthly_triggers_count.aggregate([{$match:{Users_id:req.params._id}},{$unwind:"$Daily"},
  {$match:{$and:[{"Daily.Triggers_Date":{$lte:date1}},
  {"Daily.Triggers_Date":{$gte:date2}}]}},
  {"$group":{_id:"$Daily.Triggers_Date","Total":{$sum:"$Daily.Frequency"}}}])
  .then((todo) => {
    var obj = [];
    var sum = 0;
    for(var i=0;i<todo.length;i++){
      sum += todo[i].Total;
    }

    res.status(200).send({"sum": sum});
    },(err) => {
      console.log('Unable ' ,err)
    })
  }


module.exports = monthly_triggers_count;
