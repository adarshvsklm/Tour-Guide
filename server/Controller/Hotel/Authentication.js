import express from 'express';
import User from '../../Models/UserModels.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { verifyJWT } from '../../verifyJWT.js';
import asyncHandler from 'express-async-handler';
import { createError } from '../../createError.js';
import { generateAccessToken } from '../User/AuthenticateToken.js';
import Hotel from '../../Models/HotelModels.js';

dotenv.config();

export default {
  signUp: asyncHandler(async (req, res, next) => {
    console.log(req.body);
    const hotel = await Hotel.findOne({
      email: req.body.email,
    });
    if (hotel) {
      return next(createError(409, 'User already exists'));
    }
    const newpassword = await bcrypt.hash(req.body.password, 10);
    await Hotel.create({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phoneNumber,
      password: newpassword,
    });
    res.json({ status: 200 });
  }),

  login: asyncHandler(async (req, res, next) => {
    console.log(req.body);
    const hotel = await Hotel.findOne({
      email: req.body.email,
    });
    console.log(hotel);
    if (!hotel) {
      return next(createError(401, 'invalid credentials'));
    }

    const isHotelValid = await bcrypt.compare(
      req.body.password,
      hotel.password
    );

    if (isHotelValid) {
      console.log(9348534);

      const hotelDetails = {
        id: hotel._id,
        name: hotel.name,
        email: hotel.email,
      };

      const accessToken = generateAccessToken(hotelDetails);

      const refreshToken = jwt.sign(
        hotelDetails,
        process.env.JWT_REFRESH_TOKEN_KEY
      );

      await User.updateOne(
        { _id: hotel._id },
        {
          $set: { refreshToken: refreshToken },
        }
      );
      res.cookie('accessToken-hotel', accessToken, { httpOnly: true });
      res.cookie('refreshToken-hotel', refreshToken, { httpOnly: true });
      res.cookie('hotelId', hotel._id );
      res.cookie('regStatus', hotel.regStatus );

      return res.status(200).json({ message: 'Success', hotel: hotel.name });
    }
  }),

  google_signUp: (req, res) => {
    console.log(req.body);
  },
  test: (req, res) => {
    console.log('984758347583459873947598347983479837 testtttttttt');
    // console.log(req.cookies);
  },
  logout: asyncHandler((req, res, next) => {
    res.clearCookie('hotelId');
    res.clearCookie('refreshToken_hotel');
    res.clearCookie('accessToken_hotel');
    res.status(200).json({ message: 'Success' });
    res.end();
  }),

  completeReg: asyncHandler(async (req, res) => {
    console.log(req.body, req.cookies);
    Hotel.updateOne(
      { _id: req.cookies.hotelId },
      { $set: { aadhar: req.body.url, regStatus: 'pending' } }
    )
      .then((response) => {
        res.status(200).json({ message: 'Success' });
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json({ message: err.message });
      });
    // Hotel.updateOne(id)
  }),
};
