import UserModel from "../models/UserModel.js"
import {StatusCodes} from 'http-status-codes'
import {BadRequest} from '../Errors/index.js'

const Register = async(req,res) =>{
        const {name,email,password} = req.body

        if(!name || !email || !password){
            throw new BadRequest('Please Provide All Values')
        }

        const user = await UserModel.create({name,email,password})
        res.status(StatusCodes.OK).json({user})
  
}
const Login = async(req,res) =>{
    res.send('Login Page').json({msg:'hello reg'})
}
const Update =async(req,res) =>{
    res.send('Update Page').json({msg:'hello reg'})
}

export {Register,Login,Update}