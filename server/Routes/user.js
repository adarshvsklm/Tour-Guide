import express from'express'  
let router = express.Router();
import Authentication from '../Controller/User/Authentication.js'
import {AuthenticateToken,deleteToken,newAccessToken} from '../Controller/User/AuthenticateToken.js'



router.post('/signup',Authentication.signUp)
router.post('/login',Authentication.login)
router.post('/google_signup',Authentication.google_signUp)
router.get('/test',AuthenticateToken,Authentication.test)
router.get('/token',newAccessToken)
router.get('/delete',deleteToken)

export default  router;        