import { nanoid } from 'nanoid'


// Jobs
let jobs = [
  {id:nanoid(), title:'Software Engineer', company:'Google'},
  {id:nanoid(), title:'Junior Software Engineer', company:'Amazon'},
  {id:nanoid(), title:'Senior Software Engineer', company:'Facebook'},
  {id:nanoid(), title:'Software Engineer', company:'Microsoft'}
]

// Get All Jobs
export const getAllJobs = async (req, res) => {
    res.status(200).json({jobs})
}

// Create Jobs
export const CreateJob = async (req, res) => {
    const {title, company} =  req.body
    if (!title || !company) {
      return res.status(400).json({message:'Please enter all fields'})
    }
    const id = nanoid(10)
    const job = {id,title,company} 
    jobs.push(job)
    res.status(201).json({job})
  }

// Get Single Job
export const getSingleJob = async (req, res) => {
    const {id} = req.params
    const job = jobs.find((job) => job.id === id)
    if (!job) {
      return res.status(404).json({message:'Job not found'})
    }
    return res.status(200).json({job})
    }

    
// Update Job
export const updateJob = async (req, res) => {
    const {title, company} =  req.body
  if (!title || !company) {
    return res.status(400).json({message:'Please enter all fields'})
  }
  const {id} = req.params
  const job = jobs.find((job) => job.id === id)
  if (!job) {
    return res.status(404).json({message:`Job not found with id of ${id}`})
  }
  job.title = title
  job.company = company
  res.status(200).json({message:'Job Modified',job})

}

// Delete Job
export const deleteJob = async (req, res) => {
    const {id} = req.params
    const job = jobs.find((job) => job.id === id)
    if (!job) {
      return res.status(404).json({message:`Job not found with id of ${id}`})
    }
    const Newjobs = jobs.filter((job) => job.id !== id)
    jobs = Newjobs
    res.status(200).json({message:'Job Deleted'})
  
  }
