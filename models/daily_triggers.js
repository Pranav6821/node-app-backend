let mongoose = require('mongoose');
let Schema = mongoose.Schema;

module.exports = mongoose.model("daily_triggers",new Schema({

  Users_id:{type:String,required:true},
  Daily:[{
    _id:{type:String,required:true},
    Triggers_Date:{type:Date,required:true},
    Triggers_id:{type:Schema.Types.ObjectId,ref:'triggers'},
    Frequency:{type:Number,required:true}
  }]
},{
    collection:'daily_triggers'
}))
