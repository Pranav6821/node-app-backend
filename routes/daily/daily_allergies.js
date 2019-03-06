let express = require('express');
var Daily_allergiess =require('../../models/daily_allergies');
var date1;
let app =express();


  daily_allergies = function(req , res){

    date1 = new Date()
  date1.setDate(date1.getDate() + 1);
  date1.setHours(0,0,0,0);

    //date1 =date1.toDateString(),
    console.log(date1);
    //Daily_allergiess.find({Users_id:req.params._id,"Daily.Allergies_Date":date1}).sort({"Daily.Allergies_Date":-1}).limit(3).
    Daily_allergiess.aggregate([{$match:{Users_id:req.params._id}},{"$unwind":"$Daily"},
    {$match:{"Daily.Allergies_Date":date1}},
    {$group:{_id:{freq:"$Daily.Frequency",_date:"$Daily.Allergies_Date",_sym_id:"$Daily.Allergies_id"}}},
    {$sort:{_id:-1}},
    {$limit:3}
    ])
    .then((todo) => {
    res.status(200).send(todo);
    },(err) => {
      console.log('Unable to fetch daily allergies' ,err)
    })
  }


module.exports = daily_allergies;
