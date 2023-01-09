import  express  from "express";
const app = express()
import dotenv from 'dotenv'
dotenv.config()

const Port = process.env.port

// ** Middleware
import notFoundMiddleWare from "./middleware/notFound.js";
import errorHandler from "./middleware/errorHandler.js";
notFoundMiddleWare
notFoundMiddleWare

// ** Port 
const port = process.env.Port || 3001

// ** Get Route
app.get('/',(req,res)=>{
    throw new Error('error')
    res.send('Welcome....')
})

app.use(notFoundMiddleWare)
app.use(errorHandler)

// ** Listening Port
app.listen(port,()=>{
    console.log(`Server is Running on  ${port}...`)
})