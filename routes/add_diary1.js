let express = require('express');
var diary1 =require('../models/medicine-user');
var date1;
let app =express();

  add_diary1 = function(req , res){
    date1 = new Date();
    date1.setDate(date1.getDate() + 1);
   date1.setHours(0,0,0,0);
    diary1.findOneAndUpdate({Users_id:req.params._id},{
        $addToSet :{
          Medication_plan:{
          "Med_id":req.body.Med_id,
          "Addition_Date":date1,"Modification_Date":date1,
          "Frequency":req.body.Frequency,"Dosage":req.body.Dosage,
          "Puffs":req.body.Puffs,"Type":req.body.Type}}},{upsert:true}
      ).then((todo) => {
      res.status(200).json({
      title:'Updated',
      error : {message:"AddDiary1 Successful"}
  })
  })
  }


module.exports = add_diary1;
