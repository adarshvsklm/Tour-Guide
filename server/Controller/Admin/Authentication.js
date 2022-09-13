import express from 'express';
 import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { verifyJWT } from '../../verifyJWT.js';
// import { generateAccessToken } from './AuthenticateToken.js';
import asyncHandler from 'express-async-handler';
import { createError } from '../../createError.js';
import Admin from '../../Models/AdminModels.js'
import { generateAccessToken } from '../User/AuthenticateToken.js';

dotenv.config();


export default {
    
  login: asyncHandler(async (req, res, next) => {
    console.log(req.body);
    const admin = await Admin.findOne({
      email: req.body.email,
    });
    console.log(admin);
    if (!admin) {
      return next(createError(401, 'invalid credentials'));
    }

    const isAdminValid = await bcrypt.compare(req.body.password, admin.password);

    if (isAdminValid) {
        
        const adminDetails = { id: admin._id, name: admin.name, email: admin.email };
        
        const accessToken = generateAccessToken(adminDetails);
        
        const refreshToken = jwt.sign(
            adminDetails,
            process.env.JWT_REFRESH_TOKEN_KEY
            );
            
            await Admin.updateOne(
                { _id: admin._id },
                {
                    $set: { refreshToken: refreshToken },
                }
                );
                res.cookie('AdminRefreshToken', accessToken, { maxAge: 600, httpOnly: true });
                res.cookie('AdminRefreshToken', refreshToken, { httpOnly: true });
                res.cookie('adminId', admin._id, { httpOnly: true });
                // console.log(9348534);
                
                return res.status(200).json({ message: 'Success', admin: admin.name });
    }
  }),
  logout : asyncHandler(async(req,res,next)=>{
    res.clearCookie('adminId')
    res.clearCookie('AdminRefreshToken') 
    res.clearCookie('AdminAccessToken') 
    res.status(200).json({message : "Success"})
    res.end()
    })
};
