//date_default_timezone_set('Asia/Kolkata');
let express = require('express');
var Daily_triggerss =require('../models/daily_triggers');
var date1;
let app =express();
var isodate = require("isodate");

  daily_triggers = function(req , res){

     date1 = new Date();
    //date1 =date1.toDateString(),
     date1.setDate(date1.getDate() + 1);
    //date1.toISOString();
    date1.setHours(0,0,0,0);
    console.log(date1);
    Daily_triggerss.findOneAndUpdate({Users_id:req.params._id//"Daily.Allergies_id":req.body.Allergies_id,"Daily.Allergies_Date":date1
  },{
        $addToSet :{

          Daily:{
            "Triggers_Date":date1,
            "Triggers_id":req.body.Triggers_id,
            "Frequency":req.body.Frequency}}},{upsert:true}
      ).then((todo) => {
      res.status(200).json({
      title:'Daily triggers added',
      error : {message:"Daily Triggers Added Succesfully"}
  })
  })
  }


module.exports = daily_triggers;
