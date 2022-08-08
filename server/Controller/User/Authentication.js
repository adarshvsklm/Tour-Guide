import express from 'express';
import User from '../../Models/UserModels.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { verifyJWT } from '../../verifyJWT.js';
import { generateAccessToken } from './AuthenticateToken.js';
import asyncHandler from 'express-async-handler'
import { createError } from '../../createError.js';



dotenv.config();

export default {
signUp : asyncHandler(async(req,res,next)=>{
  const user = await User.findOne({
    email: req.body.email,
  });
  if(user){
    return next(createError(409,'User already exists'))
  }
    const newpassword = await bcrypt.hash(req.body.password, 10);
      await User.create({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phoneNumber,
        password: newpassword,
      });
      res.json({ status: 200 });
}),

  login: asyncHandler( async (req, res,next) => {
    const user = await User.findOne({
      email: req.body.email,
    });
    console.log(user);
    if (!user) {
      return next(createError(401,'invalid credentials'))
    }

    const isUserValid = await bcrypt.compare(req.body.password, user.password);
     
    if (isUserValid) {
        console.log(9348534);
 

      const userDetails = { id: user._id, name: user.name, email: user.email };

      const accessToken = generateAccessToken(userDetails);
      
      const refreshToken = jwt.sign(userDetails, process.env.JWT_REFRESH_TOKEN_KEY);
  
      await User.updateOne(
        { _id: user._id },
        {
          $set: { refreshToken: refreshToken },
        }
      );
       res.cookie('accessToken', accessToken, {maxAge:60,httpOnly: true });
       res.cookie('refreshToken', refreshToken, {httpOnly: true });
       res.cookie('userId', user._id, {httpOnly: true });

      return res.status(200).json({ message: 'Success' ,user : user.name});
    }
  }),

  google_signUp: (req, res) => {
    console.log(req.body);  
  },
  test:(req,res)=>{
    console.log("984758347583459873947598347983479837 testtttttttt");
    // console.log(req.cookies);
    },
    
};
