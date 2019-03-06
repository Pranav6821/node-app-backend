let express = require('express');
var activity_users =require('../models/activity-user');

let app =express();

activity_user = function(req , res){


  activity_users.findByIdAndUpdate(req.params._id,
      {$push: {"Act_id": req.body.Act_id},
      $set : {Act_Date:Date.now(),Addition_Date:Date.now(),
      Modification_Date:Date.now()},Users_id:req.params._id},
      {safe: true, upsert: true},
      function(err, doc) {
          if(err){
          console.log(err);
          }else{
            res.send("done");
          }
      }
  );
}
//   activity_users.findOneAndUpdate({_id:req.params._id,"Act_id":{$exists: true, $eq:[]}}).then((todo) => {
//     if(todo) {
//       var activity_log = new activity_users ({
//         Act_id:req.body.Act_id,
//         Act_Date:Date.now(),
//         Addition_Date:Date.now(),
//         Modification_Date:Date.now(),
//         Users_id:req.params._id,
//       });
//     }
//     //else if{}
//     else {
//       activity_users.findOneAndUpdate({_id:req.params._id},
//         {$push:{"Act_id":req.body.Act_id}});
//
//     }
//     activity_log.save().then((doc) =>{
//       res.send(doc);
//     },(e) => {
//       res.status(200).send(e);
//     });
//   })
// }

module.exports = activity_user;
