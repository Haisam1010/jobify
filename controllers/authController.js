import UserModel from "../models/UserModel.js"
import {StatusCodes} from 'http-status-codes'

const Register = async(req,res) =>{
        const {name,email,password} = req.body
        if(!name || !email || !password){
            throw new Error('Please Provide All Values')
        }
        const user = await UserModel.create(req.body)
        res.status(StatusCodes.OK).json({msg:user})
  
}
const Login = async(req,res) =>{
    res.send('Login Page').json({msg:'hello reg'})
}
const Update =async(req,res) =>{
    res.send('Update Page').json({msg:'hello reg'})
}

export {Register,Login,Update}