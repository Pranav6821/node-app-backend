let mongoose = require('mongoose');
let Schema = mongoose.Schema;

module.exports = mongoose.model ("Symptoms_user",new Schema({

    //Allergies:[{
      Symptoms:[{
        Symptoms_id:{type:Schema.Types.ObjectId, ref:'symptoms'},
        Symptoms_Name:{type:String,required:true}

      }],
    //  Addition_Date:{type:Date,required:true}
    //}],
    Triggers:[{
      Triggers_id:{type:Schema.Types.ObjectId, ref:'triggers'},
      Triggers_Name:{type:String,required:true}

    }],
    Allergies:[{
      Allergies_id:{type:Schema.Types.ObjectId, ref:'allergies'},
      Allergies_Name:{type:String,required:true}

    }],
    //Trigger_id:[{type:Schema.Types.ObjectId, ref:'triggers'}],
    //Allergies_id:[{type:Schema.Types.ObjectId, ref:'allergies'}],
    //Date:{type:String,required:true},
    Addition_Date:{type:Date,required:true,default:Date.now()},
    Modification_Date:{type:Date,required:true,default:Date.now()},
    Users_id:{type:String,required:true},
  },{
    collection:'symptoms_user'
  }))
