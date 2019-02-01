let mongoose = require('mongoose');
let Schema = mongoose.Schema;

module.exports = mongoose.model("Medicine_Strength",new Schema({
    Strength_Medicine_id:{type:String,required:true},
    Medicine_id:{type:String,required:true},
    Medicine_Strength_Value:{type:String,required:true},
    Addition_Date:{type:Date,required:true},
    Modification_Date:{type:Date,required:true},
},{
    collection:'medicines'
}))
