const express = require('express');
//let router = express.Router();
var bodyParser = require('body-parser');
// var {mongoose} = require('../db/mongoose')

var app =express();

//app.use(bodyParser.json());
var users =require('../models/users');

//router.post('/',(req,res) => {
signup = function(req , res){
  console.log("hello");
  users.findOne({Email : req.body.Email}).then((todo) => {
    if(!todo) {
      var signupp = new users ({
        Email : req.body.Email,
        Password:req.body.Password,
        FirstName:req.body.FirstName,
        LastName:req.body.LastName,
        //Feet:req.body.Feet,
        //Inch:req.body.Inch
      });
      signupp.save().then((doc) =>{
        res.send(doc);
      },(e) => {
        res.status(400).send(e);
      });
    }
    else{
      return res.status(200).json({
      title:'Not Allowed',
      error : {message:'User already exists'}
    })
    }
  })
}

// app.listen(3000, () => {
//   console.log('Started on port 3000');
// });

module.exports = signup;
