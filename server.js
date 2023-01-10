import  express  from "express";
import ConnectDB from "./DB/connect.js";
import colors from 'colors'
const app = express()
import dotenv from 'dotenv'
dotenv.config()
import 'express-async-errors'
const Port = process.env.port
const MONGO_URL = process.env.MONGO_URL

// ** Middleware
import notFoundMiddleWare from "./middleware/notFound.js";
import errorHandler from "./middleware/errorHandler.js";
notFoundMiddleWare
notFoundMiddleWare
app.use(express.json())

//** routers */
import authRoutes from './Routes/authRoutes.js'
import jobRoutes from './Routes/jobRoutes.js'

// ** Port 
const port = process.env.Port || 3001

// ** Get Route
app.get('/',(req,res)=>{
  
    res.send('Welcome....')
})

app.use('/api/v1/auth',authRoutes)
app.use('/api/v1/jobs',jobRoutes)

app.use(notFoundMiddleWare)
app.use(errorHandler)


const start = async () =>{
    try {
       await ConnectDB(process.env.MONGO_URL)
       if(ConnectDB){
        console.log(`Connection Established`.cyan.underline)
       }
       else{
        console.log(`error`.cyan.underline)
       }
    // ** Listening Port
    app.listen(port,()=>{
    console.log(`Server is Running on  ${port}...`)
})
        
    } catch (error) {
        console.log
    }
}
start()