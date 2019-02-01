let mongoose = require('mongoose');
let Schema = mongoose.Schema;

module.exports = mongoose.model("Activity",new Schema({

    Activities_Name:{type:String,required:true},
    Activities_id:{type:String,required:true},
    Addition_Date:{type:Date,required:true},
    Modification_Date:{type:Date,required:true},
},{
    collection:'activities'
}))
