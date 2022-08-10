import asyncHandler from 'express-async-handler';
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
import twilio from 'twilio';
import { createError } from '../../../createError.js';
const client = twilio(accountSid, authToken);

export const sendOtp = asyncHandler(async (req, res, next) => {
  // console.log(accountSid, authToken);
  // console.log(req.body);
  // const Mobilenumber = req.body.phoneNumber;

  // const verification = await client.verify.v2
  //   .services(process.env.TWILIO_SERVICE_ID)
  //   .verifications.create({ to: `+91${Mobilenumber}`, channel: 'sms' });

  // console.log('---------------------here-----------------');
  // console.log(verification);
  // return res.status(200).json({ message: verification });

  console.log(req.body);
  return res.status(200).json({ message: 'verification' });
});

export const Verifyotp = asyncHandler(async (req, res, next) => {
  // const { MobileNumber, otp } = req.body;
  // await client.verify.v2
  //   .services(process.env.TWILIO_SERVICE_ID)
  //   .verificationChecks.create({ to: `+91${MobileNumber}`, code: otp })
  //   .then((verification_check) => {
  //     // resolve(verification_check.status))
  //     console.log(verification_check.status);
  //     if (verification_check.status == 'approved') {
  //       return res.status(200).json({ message: 'approved' });
  //     } else {
  //       next(createError(400, 'Invalid OTP'));
  //     }
  //   })
  //   .catch((err) => {
  //     next(createError(400, 'Invalid OTP'));
  //     console.log(err);
  //     // reject(err)
  //   });


    return res.status(200).json({ message: 'approved' });

});

 