
const addSubtractDate = require("add-subtract-date");
let express = require('express');
var Monthly_allergies_graph =require('../../models/daily_allergies');
var date1;
var date2;
let app =express();

monthly_allergies_graph = function(req , res){


  date1 = new Date()
  date1.setDate(date1.getDate() + 1);
  date1.setHours(0,0,0,0);
  date2 = new Date()
  date2.setDate(date2.getDate() - 26);
  date2.setHours(0,0,0,0);
  console.log(date1);
  console.log(date2);

  date3 = new Date()
  date3.setDate(date2.getDate() - 6);
  date3.setHours(0,0,0,0);

  date4 = new Date()
  date4.setDate(date2.getDate() - 13);
  date4.setHours(0,0,0,0);

  date5 = new Date()
  date5.setDate(date2.getDate() - 20);
  date5.setHours(0,0,0,0);

  console.log(date3);
  console.log(date4);
  console.log(date5);


  Monthly_allergies_graph.aggregate([{$match:{Users_id:req.params._id}},{$unwind:"$Daily"},
  {$match:{$and:[{"Daily.Allergies_Date":{$lte:date1}},
  {"Daily.Allergies_Date":{$gte:date2}}]}},
  {"$group":{_id:"$Daily.Allergies_Date","Total":{$sum:"$Daily.Frequency"}}}])
  .then((todo) => {
    //console.log("hey" +todo[0]._id);
    //console.log(todo.length);

    var obj = [];
    var week1 = 0;
    var week2 = 0;
    var week3 = 0;
    var week4 = 0;

    for(var i=0; i<todo.length; i++)
    {
      if(todo[i]._id > date3)
      {
        week4 += todo[i].Total;
        continue;
      }
      if(todo[i]._id > date4)
      {
        week3 += todo[i].Total;
        continue;
      }
      if(todo[i]._id > date5)
      {
        week2 += todo[i].Total;
        continue;
      }
      else {
        week1 += todo[i].Total;
      }
    }
    // if(todo.length<8){
    // for(var i=0;i<todo.length;i++){
    //   week4 += todo[i].Total;
    // }}
    // if(todo.length>8 && todo.length<15){
    // for(var i=7;i<todo.length;i++){
    //   week3 += todo[i].Total;
    // }}
    // if(todo.length>14 && todo.length<22){
    // for(var i=14;i<todo.length;i++){
    //   week2 += todo[i].Total;
    // }}
    // if(todo.length>21 && todo.length<29){
    // for(var i=21;i<todo.length;i++){
    //   week1 += todo[i].Total;
    // }}

    res.status(200).send({"week1":week1,"week2":week2,"week3":week3,"week4":week4});
    },(err) => {
      console.log('Unable ' ,err)
    })
  }


module.exports = monthly_allergies_graph;
