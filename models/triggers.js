let mongoose = require('mongoose');
let Schema = mongoose.Schema;

module.exports = mongoose.model ("Trigger",new Schema({

    Triggers_id:{type:String,required:true},
    Triggers_Name:{type:String,required:true},
    Addition_Date:{type:Date,required:true},
    Modification_Date:{type:Date,required:true},
    Type:{type:String,required:true}
  },{
    collection:'triggers'
  }))
