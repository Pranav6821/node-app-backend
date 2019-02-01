let mongoose = require('mongoose');
let Schema = mongoose.Schema;

module.exports = mongoose.model("Activity_user",new Schema({

    // Act_Name:{type:String,required:true},
    Act_id:{type:String,required:true},
    Act_Date:{type:String,required:true},
    Addition_Date:{type:Date,required:true},
    Modification_Date:{type:Date,required:true},
    Users_id:[{type:Schema.Types.ObjectId,ref:'users'}]
},{
    collection:'activity-user'
}))
