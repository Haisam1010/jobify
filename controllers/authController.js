import UserModel from "../models/UserModel.js"
import {StatusCodes} from 'http-status-codes'
import {BadRequest} from '../Errors/index.js'

const Register = async(req,res) =>{
        const {name,email,password} = req.body

        if(!name || !email || !password){
            throw new BadRequest('Please Provide All Values')
        }
        const UserExist = await UserModel.findOne({email:req.body.email})

        if(UserExist){
           return  res.status.BadRequest('Email Already Exist...')
        }

        const user = await UserModel.create({name,email,password})
        res.status(StatusCodes.OK).json({user})
        const token = user.createJWT()
        res.status(StatusCodes.OK).json({user,token})

  
}
const Login = async(req,res) =>{
    res.send('Login Page').json({msg:'hello reg'})
}
const Update =async(req,res) =>{
    Users.findOneAndUpdate
    res.send('Update Page')
}

export {Register,Login,Update}