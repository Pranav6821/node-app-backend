let mongoose = require('mongoose');
let Schema = mongoose.Schema;

module.exports = mongoose.model("daily_symptoms",new Schema({

  Users_id:{type:String,required:true},
  Daily:[{
    _id:{type:String,required:true},
    Symptoms_Date:{type:Date,required:true},
    Symptoms_id:{type:Schema.Types.ObjectId,ref:'symptoms'},
    Frequency:{type:Number,required:true}
  }]
},{
    collection:'daily_symptoms'
}))
