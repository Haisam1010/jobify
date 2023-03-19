import UserModel from "../models/UserModel.js"
import {StatusCodes} from 'http-status-codes'
import {BadRequest, Unauthaticate} from '../Errors/index.js'

const Register = async(req,res) =>{

        const {name,email,password} = req.body


        if(!name || !email || !password){
            throw new BadRequestError('Please Provide All Values')

        }

        const UserExist = await UserModel.findOne({email})

        if(UserExist){
           throw new BadRequestError('Email Already Exist...')
        }

        const user = await UserModel.create({name,email,password})
        const token = user.createJWT()
        res.status(StatusCodes.CREATED).json({user:{
            email:user.email,
            password:user.password,
            location: user.location

        },token,location: user.location})

  
}
const Login = async(req,res) =>{
    const {email,password} = req.body

    if(!email || !password){
        throw new BadRequestError('Please Provide All Value')
    }
    const user = await UserModel.findOne({email}).select('+password')
    if(!user){
        throw new Unauthaticate('invalid Credentials')
    }
    console.log(user);

    const isPasswordCorrect = await user.comparePassword(password)
    if(!isPasswordCorrect){
        throw new Unauthaticate('invalid Credentials')
    }
    const token = user.createJWT()
    res.status(StatusCodes.OK).json({user,token,location:user.location})
   
}
const Update =async(req,res) =>{
    Users.findOneAndUpdate
    res.send('Update Page...!')
}

export {Register,Login,Update}