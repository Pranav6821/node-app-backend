let express = require('express');
var Monthly_medication_rescue = require('../../models/daily_medicine_rescue');
var date1;
let app =express();

  monthly_medication_rescue = function(req , res){
    date1 = new Date()
    date1.setDate(date1.getDate() + 1);
    date1.setHours(0,0,0,0);
    date2 = new Date()
    date2.setDate(date1.getDate() - 29);
    date2.setHours(0,0,0,0);
    console.log(date1);


    Monthly_medication_rescue.aggregate([{$match:{Users_id:req.params._id}},{"$unwind":"$Daily"},
    {$match:{$and:[{"Daily.Medication_Date":{$lte:date1}},
    {"Daily.Medication_Date":{$gte:date2}}]}},
    {$group:{_id:"$Daily.Medication_Date","Actual":{$sum:"$Daily.ActualPuffs"}}},
    {$sort:{_id:-1}},
    {$limit:1}
    ])
    .then((todo) => {
      var obj = [];
      var puffs = 0;
      var per = 0;
       for(var i=0;i<todo.length;i++){
        puffs = todo[i].Actual;
      }
      var total = req.body.ActualPuffs * req.body.Frequency*30;
      per = (puffs/total)*100;
      res.status(200).send({"percentage":per});
      },(err) => {
        console.log('Unable ' ,err)
      })
    }


module.exports = monthly_medication_rescue;
