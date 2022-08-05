 import express from'express'
let router = express.Router();
import Authentication from '../Controller/User/Authentication.js'



router.post('/signup',Authentication.signUp)
router.post('/login',Authentication.login)

export default  router;