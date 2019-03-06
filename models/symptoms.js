let mongoose = require('mongoose');
let Schema = mongoose.Schema;

module.exports = mongoose.model ("Symptoms",new Schema({

    Symptoms_id:{type:String,required:true},
    Symptoms_Name:{type:String,required:true},
    Addition_Date:{type:Date,required:true},
    Modification_Date:{type:Date,required:true},
    //Type:{type:String,required:true}
  },{
    collection:'symptoms'
  }))
