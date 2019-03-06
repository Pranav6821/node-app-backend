
const addSubtractDate = require("add-subtract-date");
let express = require('express');
var Weekly_allergiess =require('../../models/daily_allergies');
var date1;
var date2;
let app =express();

weekly_allergies = function(req , res){
  date1 = new Date()
  date1.setDate(date1.getDate() + 1);
  date1.setHours(0,0,0,0);
  date2 = new Date()
  date2.setDate(date2.getDate() - 6);
  date2.setHours(0,0,0,0);
  console.log(date1);
  console.log(date2);

  Weekly_allergiess.aggregate([{$match:{Users_id:req.params._id}},{"$unwind":"$Daily"},
  {$match:{$and:[{"Daily.Allergies_Date":{$lte:date1}},
  {"Daily.Allergies_Date":{$gte:date2}}]}},
  {$group:{_id:{freq:"$Daily.Frequency",_date:"$Daily.Allergies_Date",_sym_id:"$Daily.Allergies_id"}}},
  {$sort:{_id:-1}},
  {$limit:3}
  ])
  .then((todo) => {
    res.status(200).send(todo);
    },(err) => {
      console.log('Unable ' ,err)
    })
  }


module.exports = weekly_allergies;
