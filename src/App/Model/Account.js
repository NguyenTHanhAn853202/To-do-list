const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AccountSchema = Schema({
    userName:{type:String, required:true},
    password:{type:String, required:true},
    email:{type:String,default:null},
    phoneNumber:{type:String,default:null},

},{
    timestamps:true
})

module.exports = mongoose.model('Account',AccountSchema)