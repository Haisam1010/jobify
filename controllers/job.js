import Job from '../models/Job.js'
import {StatusCodes, getStatusCode} from 'http-status-codes'
import  {BadRequest,UnAuthaticate,NotFound} from '../errors/index.js'
import CheckPer from '../utils/checkPer.js'

const createJob = async (req,res)=>{
    const {position,company} = req.body
    if(!position || !company){
        throw new BadRequest('Provide All Values')
    }
    req.body.createdBy = req.user.userId
    const job = await Job.create(req.body)
    res.status(StatusCodes.CREATED).json({ job })
}
const getAllJob = async (req,res)=>{
    const jobs = await Job.find({createdBy:req.user.userId})
    res.status(StatusCodes.OK).json({jobs, totalJobs : jobs.length, numPages: 1})
} 
const updateJob = async (req,res)=>{
   const {id : JobId} = req.params
   const { company,position} = req.body

    if(!company || !position){
        throw new BadRequest('Provide All Values')
    }
    const job = await Job.findOne({_id : JobId}) 
    if(!job){
        throw new NotFound(`No Job With Id ${_id}`)
    }

    // Check permission
    CheckPer(req.user, job.createdBy)

    const updatedJob = await Job.findOneAndUpdate({_id: jobId},req.body,{
        new: true,
        runValidators: true
    })

    res.status(StatusCodes.OK).json({updatedJob})
}
const deleteJob = async (req,res)=>{
    const {id : jobId} = req.params

    const Job = await findOne({_id : jobId})

    if(!Job){
        throw new NotFound(`No Job With ${id}`)
    }

    CheckPer(req.user, Job.createdBy)
    await Job.remove()

    res.status(StatusCodes.OK).json({msg:'Job Deleted'})
    res.send('Delete Job')
}
const showStats = async (req,res)=>{
    res.send('Stats Job')
}

export {createJob,getAllJob,updateJob,deleteJob,showStats}