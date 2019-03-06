let express = require('express');
var Daily_triggers_graph =require('../../models/daily_triggers');
var date1;
let app =express();


  daily_triggers_graph = function(req , res){

    date1 = new Date()
  date1.setDate(date1.getDate() + 1);
  date1.setHours(0,0,0,0);

    //date1 =date1.toDateString(),
    console.log(date1);
    //Daily_allergiess.find({Users_id:req.params._id,"Daily.Allergies_Date":date1}).sort({"Daily.Allergies_Date":-1}).limit(3).
    Daily_triggers_graph.aggregate([{$match:{Users_id:req.params._id}},{"$unwind":"$Daily"},
    {$match:{"Daily.Triggers_Date":date1}},
    {$group:{_id:{freq:"$Daily.Frequency",_date:"$Daily.Triggers_Date",_sym_id:"$Daily.Triggers_id"}}},
    {$sort:{_id:-1}}
    ])
    .then((todo) => {
    res.status(200).send(todo);
    },(err) => {
      console.log('Unable to fetch daily triggers' ,err)
    })
  }


module.exports = daily_triggers_graph;
