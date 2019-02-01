let mongoose = require('mongoose');
let Schema = mongoose.Schema;

module.exports = mongoose.model ("Allergies",new Schema({

    Allergies_id:{type:String,required:true},
    Allergies_Name:{type:String,required:true},
    Addition_Date:{type:Date,required:true},
    Modification_Date:{type:Date,required:true},
  },{
    collection:'allergies'
  }))
