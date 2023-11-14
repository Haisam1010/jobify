import * as dotenv from 'dotenv'
dotenv.config()
import express from 'express'
const app = express()
import morgan from 'morgan'
import { nanoid } from 'nanoid'



let jobs = [
  {id:nanoid(), title:'Software Engineer', company:'Google'},
]


if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(express.json())

// Home route

app.post('/', (req, res) => {
  console.log(req)
  res.json({ message: 'Hello World!', data:req.body })
})

// Get all jobs

app.get('/api/v1/jobs', (req, res) => {
  res.status(200).json({jobs})
})

// Create job

app.post('/api/v1/jobs', (req, res) => {
  const {title, company} = req.body
  if (!title || !company) {
    return res.status(400).json({message:'Please enter all fields'})
  }
  const id = nanoid(10)
  const job = {id,title,company} 
  jobs.push(jobs)
  res.status(200).json({job})
})

// Single job

app.get('/api/v1/jobs/:id'), (req, res) => {
const {id} = req.params
const job = jobs.find((job) => job.id === id)
if (!job) {
  return res.status(404).json({message:'Job not found'})
  res.status(200).json({job})
}

const PORT = process.env.PORT || 5100

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
}