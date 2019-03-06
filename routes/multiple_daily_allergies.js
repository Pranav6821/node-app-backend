// //date_default_timezone_set('Asia/Kolkata');
// let express = require('express');
// var Daily_allergiess =require('../models/daily_allergies');
// var date1;
// let app =express();
//
//   multiple_daily_allergies = function(req , res){
//
//      date1 = new Date()
//     date1 =date1.toDateString(),
//     console.log(date1);
//     Daily_allergiess.findOneAndUpdate({Users_id:req.params._id,"Daily.Allergies_id":req.body.Allergies_id,"Daily.Allergies_Date":date1},{
//         //$set:{Users_id:req.params._id},
//         $addToSet :{
//           Daily:{
//             "Allergies_id":req.body.Allergies_id,
//             "Allergies_Date":date1,
//             "Frequency":req.body.Frequency}}},{upsert:true}
//       ).then((todo) => {
//       res.status(200).json({
//       title:'Multiple Daily allergies added',
//       error : {message:"Multiple Daily Allergies Added Succesfully"}
//   })
//   })
//
// }
//
//
// module.exports = multiple_daily_allergies;
