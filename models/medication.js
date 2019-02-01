var express = require('express');
var bodyParser = require('body-parser');
var {mongoose} = require('../db/mongoose');

let User =require('../model/login');
let Medications = require('../model/medicine');

var app =express();

app.use(bodyParser.json());

app.post('/Add_Medication',(req,res) => {

  //User.findOne({Email : req.body.Email}).then((todo) => {
    //if(!todo) {
      var med_report = new Medications ({
        Med_id:req.body.Med_id,
        Med_Date:Date.now(),
        //Users_id:,
        Addition_Date:Date.now(),
        Modification_Date:Date.now(),
        Frequency:req.body.Frequency,
        Dosage:req.body.Dosage,
      });
      med_report.save().then((doc) =>{
        res.send(doc);
      },(e) => {
        res.status(400).send(e);
      });
    //}
    //else{
      // return res.status(500).json({
       //title:'Not Allowed',
       //error : {message:'User already exists'}
     //})
     //}
   // })
});

app.listen(3000, () => {
  console.log('Started on port for medication');
});
