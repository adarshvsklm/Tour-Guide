 import express from 'express'
const app = express() 
import mongoose from 'mongoose'
const db = mongoose.connection
import cors from 'cors'


import userRouter from './Routes/user.js'
import adminRouter from './Routes/admin.js'

import cookieParser from 'cookie-parser'



try {
    mongoose.connect('mongodb://localhost:27017/packUp')

    db.on('error', console.error.bind(console, 'connection error'));

    db.once('open', function () {
        console.log('Connected successfully');
    })
} catch (err) {
    console.log(err);
}



app.use(cors({origin: true, credentials:true}))
app.options('*', cors({origin: true, credentials:true}));


app.use(express.json())
app.use(cookieParser())



app.use('/', userRouter);  
app.use('/admin',adminRouter)



app.use((err,req,res,next)=>{  
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong!"
    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message:errorMessage,  
        stack:err.stack
    })
}) 




app.listen(9000,()=>{
    console.log("server started on port 9000");
})