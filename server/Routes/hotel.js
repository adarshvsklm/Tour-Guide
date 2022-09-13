import express, { Router } from'express'  
import { AuthenticateToken } from '../Controller/Hotel/AuthenticateToken.js';
 let router = express.Router();
import Authentication from '../Controller/Hotel/Authentication.js'
import { sendOtp, Verifyotp } from '../Controller/User/OtpVerification/Otp.js';

router.post('/signup',Authentication.signUp)
router.post('/login',Authentication.login)
router.post('/completeReg',Authentication.completeReg)
//complete jwt auth
router.get('/logout',Authentication.logout)
 
export default  router;        