// const mongoose =require('mongoose')
import mongoose from 'mongoose'
const ObjectId = mongoose.Types.ObjectId



 const Admin=new mongoose.Schema({
    name : {type:String, required:true},
    email :{type : String , required : true,unique : true},
    password : { type : String , required : true},
    refreshToken :{type : String }
 },
{
    collection : 'admin'
} )

export default  mongoose.model('admin',Admin)

   