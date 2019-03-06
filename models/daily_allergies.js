let mongoose = require('mongoose');
let Schema = mongoose.Schema;

module.exports = mongoose.model("daily_allergies",new Schema({

  Users_id:{type:String,required:true},
  Daily:[{
    Allergies_id:{type:Schema.Types.ObjectId,ref:'allergies'},
    Allergies_Date:{type:Date,required:true,maxlength:14,trim:true},
    _id:{type:String,required:true},
    Frequency:{type:Number,required:true}
  }]
},{
    collection:'daily_allergies'
}))
