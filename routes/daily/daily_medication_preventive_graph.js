let express = require('express');
var Daily_medication_preventive_graph = require('../../models/daily_medicine_preventive');
var date1;
let app =express();

  daily_medication_preventive_graph = function(req , res){
    date1 = new Date()
  date1.setDate(date1.getDate() + 1);
  date1.setHours(0,0,0,0);
    console.log(date1);

    Daily_medication_preventive_graph.aggregate([{$match:{Users_id:req.params._id}},{"$unwind":"$Daily"},
    {$match:{"Daily.Medication_Date":date1,"Daily.Medication_id":req.body.Medication_id}},
    {$group:{_id:"$Daily.Medication_Date","Actual":{$sum:"$Daily.ActualPuffs"}}},
    {$sort:{_id:-1}},
    {$limit:1}
    ])
    .then((todo) => {
      res.status(200).send(todo);
      },(err) => {
        console.log('Unable ' ,err)
      })
    }


module.exports = daily_medication_preventive_graph;
