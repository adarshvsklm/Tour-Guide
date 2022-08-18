import asyncHandler from 'express-async-handler'
import mongoose from 'mongoose';
import { createError } from '../../createError.js';
import User from '../../Models/UserModels.js'
const ObjectId = mongoose.Types.ObjectId;


export const viewUsers = asyncHandler(async(req,res,next)=>{
     User.find()
     .then((users)=>{
         return res.status(200).json({users : users})
     })
     .catch((err)=>{
         createError(400,err)
     })
})