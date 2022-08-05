// const mongoose =require('mongoose')
import mongoose from 'mongoose'
const ObjectId = mongoose.Types.ObjectId



 const User=new mongoose.Schema({
    name : {type:String, required:true},
    email :{type : String , required : true,unique : true},
    phone : {type : Number ,required : true},
    password : { type : String , required : true},
 },
{
    collection : 'user'
} )

export default  mongoose.model('user',User)

   