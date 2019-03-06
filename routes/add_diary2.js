let express = require('express');
var diary2 =require('../models/symptoms-user');

let app =express();

add_diary2 = function(req , res){

  // diary2.findByIdAndUpdate(req.params._id,
  //     $set : {Date:Date.now(),Addition_Date:Date.now(),
  //     Modification_Date:Date.now(),Users_id:req.params._id}},
  //     {safe: true, upsert: true},
  //     function(err, doc) {
  //         if(err){
  //         console.log(err);
  //         }else{
  //           res.send("drop");
  //         }
  //     });
  //
  // if( req.body.Allergies_id == null && req.body.Trigger_id == null && req.body.Symptoms_id != null)
  // {
  //   diary2.findByIdAndUpdate(req.params._id,
  //       {$push: {"Symptoms_id":req.body.Symptoms_id},
  //       $set : {Date:Date.now(),Addition_Date:Date.now(),
  //       Modification_Date:Date.now(),Users_id:req.params._id}},
  //       {safe: true, upsert: true},
  //       function(err, doc) {
  //           if(err){
  //           console.log(err);
  //           }else{
  //             res.send("only symptoms");
  //           }
  //       });
  // }
  // if ( req.body.Trigger_id == null && req.body.Symptoms_id == null && req.body.Allergies_id == null) {
  //   diary2.findByIdAndUpdate(req.params._id,
  //       {$set : {Date:Date.now(),Addition_Date:Date.now(),
  //       Modification_Date:Date.now(),Users_id:req.params._id}},
  //       {safe: true, upsert: true},
  //       function(err, doc) {
  //           if(err){
  //           console.log(err);
  //           }else{
  //             res.send("no data added");
  //           }
  //       }
  //   );
  // }
  // if ( req.body.Trigger_id == null && req.body.Symptoms_id == null && req.body.Allergies_id != null) {
  //   diary2.findByIdAndUpdate(req.params._id,
  //       {$push: {"Allergies_id": req.body.Allergies_id},
  //       $set : {Date:Date.now(),Addition_Date:Date.now(),
  //       Modification_Date:Date.now(),Users_id:req.params._id}},
  //       {safe: true, upsert: true},
  //       function(err, doc) {
  //           if(err){
  //           console.log(err);
  //           }else{
  //             res.send("only allergies");
  //           }
  //       }
  //   );
  // }
  // if ( req.body.Symptoms_id == null && req.body.Allergies_id == null && req.body.Trigger_id != null)
  // {
  //   diary2.findByIdAndUpdate(req.params._id,
  //       {$push: {"Trigger_id":req.body.Trigger_id},
  //       $set : {Date:Date.now(),Addition_Date:Date.now(),
  //       Modification_Date:Date.now(),Users_id:req.params._id}},
  //       {safe: true, upsert: true},
  //       function(err, doc) {
  //           if(err){
  //           console.log(err);
  //           }else{
  //             res.send("only triggers");
  //           }
  //       }
  //   );
  // }
  //
  // if( req.body.Symptoms_id == null && req.body.Allergies_id != null && req.body.Trigger_id != null ){
  // diary2.findByIdAndUpdate(req.params._id,
  //     {$push: {"Allergies_id": req.body.Allergies_id,"Trigger_id":req.body.Trigger_id},
  //     $set : {Date:Date.now(),Addition_Date:Date.now(),
  //     Modification_Date:Date.now(),Users_id:req.params._id}},
  //     {safe: true, upsert: true},
  //     function(err, doc) {
  //         if(err){
  //         console.log(err);
  //         }else{
  //           res.send("allergies and triggers");
  //         }
  //     }
  // );
  // }
  //
  // if( req.body.Symptoms_id != null && req.body.Allergies_id != null && req.body.Trigger_id == null ){
  // diary2.findByIdAndUpdate(req.params._id,
  //     {$push: {"Allergies_id": req.body.Allergies_id,"Symptoms_id":req.body.Symptoms_id},
  //     $set : {Date:Date.now(),Addition_Date:Date.now(),
  //     Modification_Date:Date.now(),Users_id:req.params._id}},
  //     {safe: true, upsert: true},
  //     function(err, doc) {
  //         if(err){
  //         console.log(err);
  //         }else{
  //           res.send("symptoms and allergies");
  //         }
  //     }
  // );
  // }
  //
  // if( req.body.Symptoms_id != null && req.body.Allergies_id == null && req.body.Trigger_id != null ){
  // diary2.findByIdAndUpdate(req.params._id,
  //     {$push: {"Symptoms_id": req.body.Symptoms_id,"Trigger_id":req.body.Trigger_id},
  //     $set : {Date:Date.now(),Addition_Date:Date.now(),
  //     Modification_Date:Date.now(),Users_id:req.params._id}},
  //     {safe: true, upsert: true},
  //     function(err, doc) {
  //         if(err){
  //         console.log(err);
  //         }else{
  //           res.send("symptoms and triggers");
  //         }
  //     }
  // );
  // }
  //
  // if( req.body.Symptoms_id != null && req.body.Allergies_id != null && req.body.Trigger_id != null ){
  // diary2.findByIdAndUpdate(req.params._id,
  //     {$push: {"Symptoms_id":req.body.Symptoms_id,"Allergies_id": req.body.Allergies_id,"Trigger_id":req.body.Trigger_id},
  //     $set : {Date:Date.now(),Addition_Date:Date.now(),
  //     Modification_Date:Date.now(),Users_id:req.params._id}},
  //     {safe: true, upsert: true},
  //     function(err, doc) {
  //         if(err){
  //         console.log(err);
  //         }else{
  //           res.send("all");
  //         }
  //     }
  // );
  // }
  if( req.body.Symptoms_id == null && req.body.Allergies_id != null && req.body.Triggers_id == null ){
  diary2.findOneAndUpdate({Users_id:req.params._id},{
      $addToSet :{
          Allergies:{
            "Allergies_id":req.body.Allergies_id,
            "Allergies_Name":req.body.Allergies_Name,
              //"Addition_Date":Date.now(),
              //"Modification_Date":Date.now(
          }
      }
    },{upsert:true}
    ).then((todo) => {
    res.status(200).json({
    title:'Updated',
    error : {message:"zhol1"}
  })
  })
}

if( req.body.Symptoms_id != null && req.body.Allergies_id == null && req.body.Triggers_id == null ){
diary2.findOneAndUpdate({Users_id:req.params._id},{
  $addToSet :{
      Symptoms:{
        "Symptoms_id":req.body.Symptoms_id,
        "Symptoms_Name":req.body.Symptoms_Name,
          //"Addition_Date":Date.now(),
          //"Modification_Date":Date.now(

    }}},{upsert:true}
  ).then((todo) => {
  res.status(200).json({
  title:'Updated',
  error : {message:"zhol2"}
})
})
}

if( req.body.Symptoms_id == null && req.body.Allergies_id == null && req.body.Triggers_id != null ){
diary2.findOneAndUpdate({Users_id:req.params._id},{
    $addToSet :{
        "Trigger_id":req.body.Triggers_id,
    },
    $set:{
      Addition_Date:Date.now(),
      Modification_Date:Date.now()
    }},{upsert:true}
  ).then((todo) => {
  res.status(200).json({
  title:'Updated',
  error : {message:"zhol3"}
})
})
}

}

module.exports = add_diary2;
