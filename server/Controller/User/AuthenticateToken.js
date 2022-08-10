import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import User from '../../Models/UserModels.js';
import asyncHandler from 'express-async-handler';
import { createError } from '../../createError.js';
import mongoose from 'mongoose';
const ObjectId = mongoose.Types.ObjectId;

dotenv.config();

export const AuthenticateToken = (req, res, next) => {
  const accessToken = req.cookies.accessToken;
  console.log(accessToken, 8734782948234);

  if (accessToken == null) return res.status(400).json({ message: 'No token' });

  jwt.verify(accessToken, process.env.JWT_ACCESS_KEY, (err, user) => {
    console.log(err); //expired
    if (err) return res.status(401).json({ message: 'Token Expired' });
    //  return res.status(200).send()
    // req.user = user;
    next();
  });
};



export const generateAccessToken = (user) => {
  return jwt.sign({ user }, process.env.JWT_ACCESS_KEY, { expiresIn: '1m' });
};



export const newAccessToken = asyncHandler(async (req, res, next) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken){
    const res = await User.updateOne( 
      { _id: ObjectId(req.cookies.userId) },
      { $set: { refreshToken: null } }
    );
    next(createError(400, 'Not Found'));
  }else{
    const user = await User.findOne({
      _id: ObjectId(req.cookies.userId),
      refreshToken: refreshToken,
    });
    if (user) {
      jwt.verify(refreshToken, process.env.JWT_REFRESH_TOKEN_KEY, async(err, user) => {
        if (err){
          res.clearCookie('refreshToken')
          console.log('refreshtokennnnnnnnnnnnnnnnn');
          const response = await User.updateOne( 
            { _id: ObjectId(req.cookies.userId) },
            { $set: { refreshToken: null } }
          );
          createError(403, 'Invalid Refresh Token');
        }
  
        const userDetails = { id: user._id, name: user.name, email: user.email };
        const accessToken = generateAccessToken(userDetails);
        console.log('-------------------3948983', accessToken);
  
        res.cookie('accessToken', accessToken, { maxAge: 90000, httpOnly: true });
        return res.status(200).json({ message: 'Success' });
      });
    } else {
      next(createError(400, 'Not Found'))
    }
  }
 
});

// export const deleteToken = asyncHandler(async (req, res, next) => {
   
// });
