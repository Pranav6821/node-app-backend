let mongoose = require('mongoose');
let Schema = mongoose.Schema;

module.exports = mongoose.model("Medicine_user",new Schema({

    // Med_Name:{type:String,required:true},
    Med_id:{type:String,required:true},
    Med_Date:{type:String,required:true},
    Users_id:[{type:Schema.Types.ObjectId,ref:'users'}],
    Addition_Date:{type:Date,required:true},
    Modification_Date:{type:Date,required:true},
    Frequency:{type:String,required:true},
    Dosage:{type:String,required:true}
},{
    collection:'medicine-user'
}))
