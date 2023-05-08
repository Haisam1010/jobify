import 'express-async-errors'
import morgan from 'morgan';
import express from "express";
const app = express()
import dotenv from 'dotenv'
dotenv.config()


if(process.env.NODE_ENV !== 'production'){
    app.use(morgan('dev'))
}
app.use(express.json())

//** Routes */
import authRouter from "./Routes/authRoutes.js";
import jobRoutes from './Routes/jobRoutes.js'

//** Middleware */
import notFoundMiddleWare from "./middleware/notefound.js";
import errorshandlers from "./middleware/errorshandler.js";
import authUser from './middleware/auth.js';
import ConnectDB from "./DB/db.js";



 const PORT = 3001



app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', authUser,jobRoutes)

app.get('/',(req,res)=>{
    res.json({msg:'welcome'})
})
app.get('/api/v1',(req,res)=>{
    res.json({msg:'Api'})
})

app.use(notFoundMiddleWare)
app.use(errorshandlers)




const start = async () => {
    try {
        await ConnectDB(process.env.MONGO_URL)
        app.listen(PORT,()=>{
            console.log(`Server is Running ${PORT}`)
        })
    } catch (err) {
        console.log(err)
    }
}
start()