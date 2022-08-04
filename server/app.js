 import express from 'express'
const app = express() 
import mongoose from 'mongoose'
const db = mongoose.connection
import cors from 'cors'


import userRouter from './Routes/user.js'
import adminRouter from './Routes/admin.js'



app.use(cors())
app.use(express.json())



app.use('/', userRouter);  
app.use('/admin',adminRouter)



try {
    mongoose.connect('mongodb://localhost:27017/packUp')

    db.on('error', console.error.bind(console, 'connection error'));

    db.once('open', function () {
        console.log('Connected successfully');
    })
} catch (err) {
    console.log(err);
}



app.listen(9000,()=>{
    console.log("server started on port 9000");
})