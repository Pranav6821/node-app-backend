let mongoose = require('mongoose');
let Schema = mongoose.Schema;

module.exports = mongoose.model ("Symptoms_user",new Schema({

    Symptoms_id:[{type:Schema.Types.ObjectId, ref:'symptoms'}],
    Trigger_id:[{type:Schema.Types.ObjectId, ref:'triggers'}],
    Allergies_id:[{type:Schema.Types.ObjectId, ref:'allergies'}],
    Date:{type:String,required:true},
    Addition_Date:{type:Date,required:true},
    Modification_Date:{type:Date,required:true},
    Users_id:[{type:Schema.Types.ObjectId, ref:'users'}],
  },{
    collection:'symptoms-user'
  }))
