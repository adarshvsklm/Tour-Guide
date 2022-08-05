import express from'express'
let router = express.Router();
import User from '../../Models/UserModels.js'
// const bcrypt = require('bcryptjs')
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

 



 
export default {
    signUp :async(req,res)=>{
        console.log(req.body);
        try {
            const newpassword = await bcrypt.hash(req.body.password, 10)
            await User.create({
                name: req.body.name,
                email: req.body.email,
                phone :req.body.phoneNumber,
                password: newpassword
            })
            res.json({ status: 200 })
        } catch (err) {
            console.log(err);
    
            res.json({ status: 400, error: "Duplicate email" })
        }
        finally {
            console.log('djsdjkjdh');
        }
    },
    login : async(req,res)=>{
        console.log(req.body);
        const user = await User.findOne({
            email: req.body.email,
        })
         console.log(user);
        if (!user) {
    
            return res.json({ status: 400, error: 'Invalid Login' })
        }
    
        const isUserValid = await bcrypt.compare(req.body.password, user.password)
    
        if (isUserValid) {
            console.log( user.name,87654334567890);

            const token = jwt.sign(
                {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                 },
                'secret123'
            )
            // console.log('logged in');
            return res.json({ status: 200, user: token, userDetails: user })
        } else {

            return res.json({ status: 400, user: false })
    
        }
    }
}