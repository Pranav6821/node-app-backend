
const addSubtractDate = require("add-subtract-date");
let express = require('express');
var Monthly_triggers=require('../../models/daily_triggers');
var date1;
var date2;
let app =express();

monthly_triggers = function(req , res){
  date1 = new Date()
  date1.setDate(date1.getDate() + 1);
  date1.setHours(0,0,0,0);
  date2 = new Date()
  date2.setDate(date2.getDate() - 29);
  date2.setHours(0,0,0,0);
  console.log(date1);
  console.log(date2);
  Monthly_triggers.aggregate([{$match:{Users_id:req.params._id}},{"$unwind":"$Daily"},
  {$match:{$and:[{"Daily.Triggers_Date":{$lte:date1}},
  {"Daily.Triggers_Date":{$gte:date2}}]}},
  {$group:{_id:{freq:"$Daily.Frequency",_date:"$Daily.Triggers_Date",_sym_id:"$Daily.Triggers_id"}}},
  {$sort:{_id:-1}},
  {$limit:3}
  ])
  .then((todo) => {
    res.status(200).send(todo);
    },(err) => {
      console.log('Unable ' ,err)
    })
  }


module.exports = monthly_triggers;
