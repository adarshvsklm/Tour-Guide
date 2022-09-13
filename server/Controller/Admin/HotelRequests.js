import asyncHandler from 'express-async-handler';
import mongoose from 'mongoose';
import { createError } from '../../createError.js';
import Hotel from '../../Models/HotelModels.js';

export const hotelRequests = asyncHandler(async (req, res) => {
  const hotels = await Hotel.find({ regStatus: 'pending' });
  // .then((hotels)=>{
  console.log(hotels);
  return res.status(200).json({ requests: hotels });
  // })
  // .catch((err)=>{
  //     createError(400,err)
  // })
});

export const acceptHotelReq = asyncHandler(async (req, res) => {
  console.log(req.query.id);
  Hotel.updateOne(
    { _id: req.query.id },
    {
      $set: {
        regStatus: 'accepted',
      },
    }
  )
  .then((response) => {
     res.status(200).json({ message:'Success'})
  })
  .catch((err)=>{
    res.status(500).json({ message:err})
  })
});

export const rejectHotelReq = asyncHandler(async (req, res) => {
  console.log(req.query.id);
  Hotel.updateOne(
    { _id: req.query.id },
    {
      $set: {
        regStatus: 'rejected',
      },
    }
  )
  .then((response) => {
     res.status(200).json({ message:'Success'})
  })
  .catch((err)=>{
    res.status(500).json({ message:err})
  })
});
