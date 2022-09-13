import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
// import User from '../../Models/UserModels.js';
import Hotel from '../../Models/HotelModels.js';
import asyncHandler from 'express-async-handler';
import { createError } from '../../createError.js';
import mongoose from 'mongoose';
const ObjectId = mongoose.Types.ObjectId;

dotenv.config();

export const AuthenticateToken = asyncHandler(async (req, res, next) => {
  const accessToken = req.cookies.accessToken_hotel;
  console.log(accessToken, 8734782948234);

  // if (accessToken == null) return res.status(400).json({ message: 'Token error' });

  jwt.verify(accessToken, process.env.JWT_ACCESS_KEY, async (err, user) => {
    console.log(err); //expired
    if (err) return res.status(401).json({ message: 'Token error' });
    //  return res.status(200).send()
    // req.user = user;
    // next();

    //refresh token
    const refreshToken = req.cookies.refreshToken_hotel;
    if (!refreshToken) {
      const res = await Hotel.updateOne(
        { _id: ObjectId(req.cookies.userId) },
        { $set: { refreshToken: null } }
      );
      next(createError(400, 'Not Found'));
    } else {
      const hotel = await Hotel.findOne({
        _id: ObjectId(req.cookies.hotelId),
        refreshToken: refreshToken,
      });
      if (hotel) {
        jwt.verify(
          refreshToken,
          process.env.JWT_REFRESH_TOKEN_KEY,
          async (err, user) => {
            if (err) {
              res.clearCookie('refreshToken_hotel');
              console.log('refreshtokennnnnnnnnnnnnnnnn');
              const response = await Hotel.updateOne(
                { _id: ObjectId(req.cookies.hotelId) },
                { $set: { refreshToken: null } }
              );
              createError(403, 'Invalid Refresh Thotelken');
            }

            const hotelDetails = {
              id: hotel._id,
              name: hotel.name,
              email: hotel.email,
            };
            const accessToken = generateAccessToken(hotelDetails);
            console.log('-------------------3948983', accessToken);

            res.cookie('accessToken_hotel', accessToken, {
              maxAge: 90000,
              httpOnly: true,
            });
            return res.status(200).json({ message: 'Success' });
          }
        );
      } else {
        next(createError(400, 'Not Found'));
      }
    }
    //refresh token --
  });
});

export const generateAccessToken = (details) => {
  return jwt.sign({ details }, process.env.JWT_ACCESS_KEY, { expiresIn: '1m' });
};

export const newAccessToken = asyncHandler(async (req, res, next) => {
  const refreshToken = req.cookies.refreshToken - hotel;
  if (!refreshToken) {
    const res = await Hotel.updateOne(
      { _id: ObjectId(req.cookies.userId) },
      { $set: { refreshToken: null } }
    );
    next(createError(400, 'Not Found'));
  } else {
    const hotel = await Hotel.findOne({
      _id: ObjectId(req.cookies.hotelId),
      refreshToken: refreshToken,
    });
    if (hotel) {
      jwt.verify(
        refreshToken,
        process.env.JWT_REFRESH_TOKEN_KEY,
        async (err, user) => {
          if (err) {
            res.clearCookie('refreshToken-hotel');
            console.log('refreshtokennnnnnnnnnnnnnnnn');
            const response = await Hotel.updateOne(
              { _id: ObjectId(req.cookies.hotelId) },
              { $set: { refreshToken: null } }
            );
            createError(403, 'Invalid Refresh Thotelken');
          }

          const hotelDetails = {
            id: hotel._id,
            name: hotel.name,
            email: hotel.email,
          };
          const accessToken = generateAccessToken(hotelDetails);
          console.log('-------------------3948983', accessToken);

          res.cookie('accessToken', accessToken, {
            maxAge: 90000,
            httpOnly: true,
          });
          return res.status(200).json({ message: 'Success' });
        }
      );
    } else {
      next(createError(400, 'Not Found'));
    }
  }
});

// export const deleteToken = asyncHandler(async (req, res, next) => {

// });
