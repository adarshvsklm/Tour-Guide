import asyncHandler from 'express-async-handler'
const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN
import twilio from 'twilio' 
const client = twilio(accountSid, authToken)


export const sendOtp = asyncHandler(async(req, res, next) => {
//     console.log(accountSid,authToken);
//     console.log(req.body);
//   const Mobilenumber = req.body.phoneNumber;
  

//    const verification =await client.verify.v2
//   .services(process.env.TWILIO_SERVICE_ID)
//   .verifications.create({ to: `+91${Mobilenumber}`, channel: 'sms' });

//   console.log('---------------------here-----------------');
//   console.log(verification);
//   resolve(verification)
//   return res.status(200).json({ message: verification });

console.log(req.body);
return res.status(200).json({ message: 'verification' });

});

 

  export const Verifyotp =asyncHandler((req,res,next)=>{
    console.log(req.body);
    const {Mobilenumber,otp} = req.body
    client.verify.v2
    .services(process.env.TWILIO_SERVICE_ID)
    .verificationChecks.create({ to: `+91${Mobilenumber}`, code: otp })
    .then((verification_check) => resolve(verification_check.status))
    .catch((err) => reject(err));
  } )
  

// export const Verifyotp = asyncHandler(async (req, res, next) => {
//   const { OTP, MobileNumber } = req.body;
//   const response = await verifyOtp(MobileNumber, OTP)
// //   const response = 'approved';
//   if (response === 'approved') {
//     const user = { name: data.Name };
//     const accessToken = generateAccessToken(user);
//     const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
//     data.refreshToken = refreshToken;
//     const res = await User.create({
//       name: data.Name,
//       email: data.Email,
//       mobileNumber: data.MobileNumber,
//       refreshToken,
//     });
//     res.cookie('accessToken', accessToken, { maxAge: 6000, httpOnly: true });
//     res.cookie('refreshToken', refreshToken, { httpOnly: true });
//     res.cookie('uerId', res._id, { httpOnly: true });
//     return res.status(200).json({ message: 'Success' });
//   } else {
//     return next(createError(401, 'invalid Otp'));
//   }
// });
