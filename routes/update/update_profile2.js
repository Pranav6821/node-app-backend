let express = require('express');
//let router = express.Router();
// var bodyParser = require('body-parser');
// var {mongoose} = require('../db/mongoose');
//
 var users =require('../../models/users');

let app =express();

//app.use(bodyParser.json());

// update1 = function(req , res){
//   users.findOneAndUpdate({'Email' : req.body.Email},{
//       $set :{
//         Email : req.body.Email,
//         Contact:req.body.Contact,
//         Birthdate:req.body.Birthdate,
//         Location:req.body.Location,
//         Feet:req.body.Feet,
//         Inch:req.body.Inch,
//         WtKg:req.body.WtKg,
//         WtGm:req.body.WtGm,
//         Gender:req.body.Gender,
//         alertbit:0,
//         appointmentbit:0
//       }},{new:true}
//     ).then((todo) => {
//     res.status(200).json({
//     title:'Updated',
//     error : {message:"Updation1 Successful"}
// })
// })
// }

update2 = function(req , res){
  users.findOneAndUpdate({'Email' : req.body.Email},{
      $set :{

        GPName:req.body.GPName,
        GPNo:req.body.GPNo,
        CareTaker1_No:req.body.CareTaker1_No,
        CareTaker1_Name:req.body.CareTaker1_Name,
        CareTaker2_No:req.body.CareTaker2_No,
        CareTaker2_Name:req.body.CareTaker2_Name,
        alertbit:req.body.alertbit,
        appointmentbit:req.body.appointmentbit
      }},{new:true}
    ).then((todo) => {
    res.status(200).json({
    title:'Updated',
    error : {message:"Updation2 Successful"}
})
})
}


module.exports = update2;
//module.exports = update2;
