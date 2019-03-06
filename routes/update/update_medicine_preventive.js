// //date_default_timezone_set('Asia/Kolkata');
// let express = require('express');
// var Update_medicine_preventive =require('../models/daily_medicine_preventive');
// var date1;
// let app =express();
//
//   update_medicine_preventive = function(req , res){
//
//     date1 = new Date();
//     date1.setDate(date1.getDate() + 1);
//    date1.setHours(0,0,0,0);
//     console.log(date1);
//     Update_medicine_preventive.findOneAndUpdate({Users_id:req.params._id,"Daily.Allergies_id":req.body.Allergies_id,"Daily.Allergies_Date":date1},{
//         $set:{Users_id:req.params._id},
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
// module.exports = update_medicine_preventive;
