let express = require('express');
var Weekly_medication_preventive_graph = require('../../models/daily_medicine_preventive');
var date1;
var date2;
let app =express();

  weekly_medication_preventive_graph = function(req , res){
    date1 = new Date()
    date1.setDate(date1.getDate() + 1);
    date1.setHours(0,0,0,0);
    date2 = new Date()
    date2.setDate(date1.getDate() - 6);
    date2.setHours(0,0,0,0);
    console.log(date1);

    Weekly_medication_preventive_graph.aggregate([{$match:{Users_id:req.params._id}},{"$unwind":"$Daily"},
    {$match:{$and:[{"Daily.Medication_Date":{$lte:date1}},
    {"Daily.Medication_Date":{$gte:date2}}]}},
    {$group:{_id:"$Daily.Medication_Date","Actual":{$sum:"$Daily.ActualPuffs"}}},
    {$sort:{_id:-1}}
    ])
    .then((todo) => {
      res.status(200).send(todo);
      },(err) => {
        console.log('Unable ' ,err)
      })
    }

module.exports = weekly_medication_preventive_graph;
