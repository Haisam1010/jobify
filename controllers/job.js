import Job from '../models/Job.js'
import {StatusCodes} from 'http-status-codes'
import  {BadRequest,UnAuthaticate} from '../errors/index.js'

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
    res.send('Get All Job')
} 
const updateJob = async (req,res)=>{
    res.send('Update Job')
}
const deleteJob = async (req,res)=>{
    res.send('Delete Job')
}
const showStats = async (req,res)=>{
    res.send('Stats Job')
}

export {createJob,getAllJob,updateJob,deleteJob,showStats}