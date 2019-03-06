let express = require('express');
var users =require('../../models/users');

let app =express();

update1 = function(req , res){

  users.findOneAndUpdate({_id:req.params._id},{
      $set :{
        Email : req.body.Email,
        Contact:req.body.Contact,
        Birthdate:req.body.Birthdate,
        Location:req.body.Location,
        Feet:req.body.Feet,
        Inch:req.body.Inch,
        WtKg:req.body.WtKg,
        WtGm:req.body.WtGm,
        Gender:req.body.Gender,
        alertbit:0,
        appointmentbit:0,
        Modification_Date:Date.now()
      }},{new:true}
    ).then((todo) => {
    res.status(200).json({
    title:'Updated',
    error : {message:"Updation1 Successful"}
})
})
}

module.exports = update1;
