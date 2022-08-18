import express from'express'  
let router = express.Router();
import Authentication from '../Controller/User/Authentication.js'
import {AuthenticateToken,newAccessToken} from '../Controller/User/AuthenticateToken.js'
import { sendOtp, Verifyotp } from '../Controller/User/OtpVerification/Otp.js';



router.post('/signup',Authentication.signUp)
router.post('/login',Authentication.login)
router.post('/google_signup',Authentication.google_signUp)
router.get('/test',AuthenticateToken,Authentication.test)
router.get('/token',newAccessToken)
router.post('/sendOtp',sendOtp)
router.post('/verifyOtp',Verifyotp)
// router.get('/delete',deleteToken)
router.get('/logout',Authentication.logout)

export default  router;        