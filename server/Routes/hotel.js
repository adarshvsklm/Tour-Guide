import express from'express'  
 let router = express.Router();
import Authentication from '../Controller/Hotel/Authentication.js'
import { sendOtp, Verifyotp } from '../Controller/User/OtpVerification/Otp.js';

router.post('/signup',Authentication.signUp)
router.post('/login',Authentication.login)
 
export default  router;        