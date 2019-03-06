let mongoose = require('mongoose');
let Schema = mongoose.Schema;

module.exports = mongoose.model("Medicine",new Schema({
    Medicine_id:{type:String,required:true},
    Medicine_Name:{type:String,required:true},
    Addition_Date:{type:Date,required:true},
    Modification_Date:{type:Date,required:true},
    Generic_Name:{type:String,required:true},
    Asthma_Medicine_Type:{type:String,required:true},
    Medicine_Type:{type:String,required:true},
    Medicine_Country:{type:String,required:true}
},{
    collection:'medicines'
}))
