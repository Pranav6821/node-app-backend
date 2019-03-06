let express = require('express');
var Daily_medicine_rescue =require('../models/daily_medicine_rescue');
var date1;
let app =express();

  daily_medicines_rescue = function(req , res){
    date1 = new Date(),
    date1.setDate(date1.getDate() + 1);
     date1.setHours(0,0,0,0);
    Daily_medicine_rescue.findOneAndUpdate({Users_id:req.params._id},{
        $addToSet :{
          //Users_id:req.params._id,
          Daily:{
            "Medication_Date":date1,
            "Medication_id":req.body.Med_id,
            "ActualPuffs":req.body.ActualPuffs}}},{upsert:true}
      ).then((todo) => {
      res.status(200).json({
      title:'Daily Medicine added',
      error : {message:"Daily Medicine for rescue Added Succesfully"}
  })
  })
  }


module.exports = daily_medicines_rescue;
