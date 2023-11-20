import { StatusCodes } from 'http-status-codes'
import Job from '../Models/JobModel.js'
import { nanoid } from 'nanoid'



// Get All Jobs
export const getAllJobs = async (req, res) => {
    const jobs = await Job.find({})
    res.status(StatusCodes.OK).json({jobs})
}

// Create Jobs
export const CreateJob = async (req, res) => {
    const jobs = await Job.create(req.body)
    res.status(StatusCodes.CREATED).json({jobs})
  }

// Get Single Job
export const getSingleJob = async (req, res) => {
    const {id} = req.params
    const job = await Job.findById(id)
    if (!job) {
      return res.status(StatusCodes.NOT_FOUND).json({message:'Job not found'})
    }
    return res.status(StatusCodes.OK).json({job})
    }

    
// Update Job
export const updateJob = async (req, res) => {
  const {id} = req.params
  const updatedJob = await Job.findOneAndUpdate(id,req.body,{new:true})
  if (!updatedJob) {
    return res.status(StatusCodes.NOT_FOUND).json({message:`Job not found with id of ${id}`})
  }

  res.status(StatusCodes.OK).json({message:'Job Modified',updatedJob})

}

// Delete Job
export const deleteJob = async (req, res) => {
    const {id} = req.params
    const Deletejob = await Job.findByIdAndDelete(id)
   
    if (!Deletejob) {
      return res.status(StatusCodes.NOT_FOUND).json({message:`Job not found with id of ${id}`})
    }
    res.status(StatusCodes.OK).json({message:'Job Deleted', job:Deletejob})
  
  }
