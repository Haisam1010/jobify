import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
const app = express()
import morgan from 'morgan'
import JobRouter from './routes/jobRoutes.js'
import mongoose from 'mongoose'
// Dev logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}
// Body parser
app.use(express.json())
// Jobs routes
app.use('/api/v1/jobs',JobRouter)
// Error handling
app.use('*',(rq,res)=>{
  res.status(404).json({message:'Route not found'})
})
app.use((err,req,res,next)=>{
  console.log(err)
  res.status(500).json({message:'Something went wrong'})
}) 
// Server
const PORT = process.env.PORT || 5100
// const PORT = 5100

mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('Connected to Mongo!');
    })
    .catch((err) => {
        console.error('Error connecting to Mongo', err);
    });

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
}
