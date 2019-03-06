//date_default_timezone_set('Asia/Kolkata');
let express = require('express');
var daily_symptomss =require('../models/daily_symptoms');
var date1;
let app =express();

  daily_symptoms = function(req , res){

     date1 = new Date()
    //date1 =date1.toDateString(),
    date1.setDate(date1.getDate() + 1);
    date1.setHours(0,0,0,0);
    daily_symptomss.findOneAndUpdate({Users_id:req.params._id//"Daily.Allergies_id":req.body.Allergies_id,"Daily.Allergies_Date":date1
  },{
        $addToSet :{
          Daily:{
            "Symptoms_Date":date1,
            "Symptoms_id":req.body.Symptoms_id,
            "Frequency":req.body.Frequency}}},{upsert:true}
      ).then((todo) => {
      res.status(200).json({
      title:'Daily symptoms added',
      error : {message:"Daily symptoms Added Succesfully"}
  })
  })
  }


module.exports = daily_symptoms;
