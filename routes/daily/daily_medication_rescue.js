let express = require('express');
var Daily_medication_rescue = require('../../models/daily_medicine_rescue');
var date1;
let app =express();

  daily_medication_rescue = function(req , res){
    date1 = new Date()
  date1.setDate(date1.getDate() + 1);
  date1.setHours(0,0,0,0);
    console.log(date1);

    Daily_medication_rescue.aggregate([{$match:{Users_id:req.params._id}},{"$unwind":"$Daily"},
    {$match:{"Daily.Medication_Date":date1,"Daily.Medication_id":req.body.Medication_id}},
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
      var total = req.body.ActualPuffs * req.body.Frequency;
      per = (puffs/total)*100;
      res.status(200).send({"percentage":per});
      },(err) => {
        console.log('Unable ' ,err)
      })
    }


module.exports = daily_medication_rescue;



// let express = require('express');
// var Daily_medication_preventive = require('../../models/daily_medicine_preventive');
// var Daily_medicine = require('../../models/medicine-user')
// var date1;
// let app =express();
//
//
//   daily_medication_preventive = function(req , res){
//
//     date1 = new Date()
//   date1.setDate(date1.getDate() + 1);
//   date1.setHours(0,0,0,0);
//     console.log(date1);
//
//     Promise.all([
//       Daily_medication_preventive.aggregate([{$match:{Users_id:req.params._id}},{"$unwind":"$Daily"},
//       {$match:{"Daily.Medication_Date":date1}},
//       {$group:{_id:{"puffs":"$Daily.ActualPuffs","_date":"$Daily.Medication_Date","_med_id":"$Daily.Medication_id"}}},
//     ]),
//       Daily_medicine.aggregate([{$unwind:"$Medication_plan"},
//       {$match:{"Medication_plan.Type":"Preventive"}},
//       {$group:{_id:{_date:"$Medication_plan.Addition_Date",
//       total_puffs:"$Medication_plan.Puffs",_freq:"$Medication_plan.Frequency"}}},
//       {$sort:{_id:-1}},{$limit:1}])
//     ])
//     .then((todo) => {
//
//       const [Daily_medication_preventive] = todo;
//       var abc = todo.puffs;
//       console.log("users",Daily_medication_preventive);
//       // console.log("categories",categories);
//       // console.log("contents",content);
//       //var sum = x.ActualPuffs;
//     res.status(200).send({"abc":abc});
//     //console.log(x);
//     },(err) => {
//       console.log('Unable to fetch daily medication_plan' ,err)
//     })
//   }
//
//
// module.exports = daily_medication_preventive;
