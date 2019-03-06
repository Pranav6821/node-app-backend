let mongoose = require('mongoose');
let Schema = mongoose.Schema;

module.exports = mongoose.model("daily_medicine_rescue",new Schema({

    Users_id:{type:String,required:true},
    Daily:[{
      _id:{type:String,required:true},
      Medication_Date:{type:Date,required:true},
      Medication_id:{type:String,required:true},
      ActualPuffs:{type:Number,required:true},
    }]
},{
    collection:'daily_medicine_rescue'
}))
