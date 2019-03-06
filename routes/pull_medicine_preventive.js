
//date_default_timezone_set('Asia/Kolkata');
let express = require('express');
var Pull_daily_medicine_preventive =require('../models/daily_medicine_preventive');
var date1;
let app =express();

  pull_daily_medicine_preventive = function(req , res){

    date1 = new Date()
    date1.setDate(date1.getDate() + 1);
    date1.setHours(0,0,0,0);
    Pull_daily_medicine_preventive.update({"Daily.Medication_Date":date1,Users_id:req.body.Users_id},
    {$pull:{Daily:{"Medication_Date":date1}}})
    .then((todo) => {
      console.log(todo);
      console.log(date1);
      res.status(200).send(todo);
    },(err) => {
      console.log("unable",err);
    })//.json({
      // title:'Succesfully',
      // error : {message:"Daily Triggers pulled"}
  }
module.exports = pull_daily_medicine_preventive;
