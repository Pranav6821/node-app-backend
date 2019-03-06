//date_default_timezone_set('Asia/Kolkata');
let express = require('express');
var daily_allergiess =require('../models/daily_allergies');
var date1;
let app =express();

  daily_allergies = function(req , res){

     date1 = new Date()
   date1.setDate(date1.getDate() + 1);
   //date1.setDate(date1.getDate() - 15);
   date1.setHours(0,0,0,0);
    daily_allergiess.findOneAndUpdate({Users_id:req.params._id//"Daily.Allergies_id":req.body.Allergies_id,"Daily.Allergies_Date":date1
  },{
        $addToSet :{

          Daily:{
            "Allergies_Date":date1,
            "Allergies_id":req.body.Allergies_id,
            "Frequency":req.body.Frequency}}},{upsert:true}
      ).then((todo) => {
      res.status(200).json({
      title:'Daily allergies added',
      error : {message:"Daily Allergies Added Succesfully"}
  })
  })
  }


module.exports = daily_allergies;
