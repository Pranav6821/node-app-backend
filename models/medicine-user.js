let mongoose = require('mongoose');
let Schema = mongoose.Schema;

module.exports = mongoose.model("Medicine_user",new Schema({

    Users_id:{type:String,required:true},
    Medication_plan:[{
      Med_Name:{type:String,required:true},
      Med_id:{type:String,required:true},
      _id:{type:String,required:true},
      Addition_Date:{type:Date,required:true},
      Modification_Date:{type:Date,required:true},
      Frequency:{type:Number,required:true},
      Dosage:{type:Number,required:true},
      Puffs:{type:Number,required:true},
      Type:{type:String,required:true}
    }]
},{
    collection:'medicine_user'
}))
