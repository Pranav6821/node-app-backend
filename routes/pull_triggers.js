
//date_default_timezone_set('Asia/Kolkata');
let express = require('express');
var Pull_daily_triggers =require('../models/daily_triggers');
var date1;
let app =express();

  pull_daily_triggers = function(req , res){

    date1 = new Date()
    date1.setDate(date1.getDate() + 1);
    date1.setHours(0,0,0,0);
    console.log(date1);
    console.log(req.params._id);
    // console.log(Pull_daily_triggers.updateOne({Users_id:req.params._id},
    // {$pull:{Daily:{Triggers_Date:date1}}}));
    Pull_daily_triggers.updateOne({"Daily.Triggers_Date":date1,Users_id:req.body.Users_id},
    {$pull:{Daily:{"Triggers_Date":date1}}})
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

module.exports = pull_daily_triggers;
