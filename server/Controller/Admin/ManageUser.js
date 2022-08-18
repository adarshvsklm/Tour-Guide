import asyncHandler from 'express-async-handler';
import mongoose from 'mongoose';
import { createError } from '../../createError.js';
import User from '../../Models/UserModels.js';
const ObjectId = mongoose.Types.ObjectId;

export const block = asyncHandler((req, res, next) => {
   User.updateOne(
    { _id: ObjectId(req.query.id) },
    { $set: { isBlocked: true } }
  ).then((response)=>{
    return res.status(200).json({response : "Success"})
  })
});

export const unBlock = asyncHandler((req,res,next)=>{
     User.updateOne(
        { _id: ObjectId(req.query.id) },
        { $set: { isBlocked: false } }
      ).then((response)=>{
        return res.status(200).json({response : "Success"})
      })})
