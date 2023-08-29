const mongoose = require('mongoose');
const Schema = mongoose.Schema

const CalendarSchema = new Schema({
    userName :{type:String,ref:'Account'},
    name:{type:String, required:true},
    description:String,
    date:Date,
    dateFind:{type:String, required:true},
    finished:{type:Boolean, required:false},
    level:{type:String, default:'normal'},
    createAt:{type:Date, default:Date.now},
    updateAt:{type:Date, default:Date.now},
    deleteAt:{type:Date, default:Date.now},
})



module.exports = mongoose.model('Calendar', CalendarSchema)