import User from "../models/User.js"
import { StatusCodes} from 'http-status-codes'
import  {CustomApi,NotFound,BadRequest,UnAuthaticate} from '../errors/index.js'


const Register = async (req,res) => {

    
    const {name,email,password} = req.body
    if( !name || !email || !password){
        throw new BadRequest('Please Provide All Values ')
    }
    const UserExist = await User.findOne({email})

    if(UserExist){
        throw new BadRequest('Email Already in Use ')
    }
        const user = await User.create(req.body)

        const token =  user.createJWT()
        res.status(StatusCodes.OK).json({
            user:{email:user.email,
            lastName:user.lastName,
            name:user.name,
            location:user.location}
            ,token,location:user.location})
  
}
const Login = async (req,res) => {
    const {email,password} = req.body
    if(!email || !password){
        throw new BadRequest('Please Provide All Values ')
    }

    const user = await User.findOne({email}).select('+password')
    if(!user){

        throw new UnAuthaticate('invalid credentials')

    }

    const isCorrectPassword = await user.comparePassword(password)

    if(!isCorrectPassword){

        throw new UnAuthaticate('invalid credentials')

    }

    const token = user.createJWT()
    user.password = undefined
    res.status(StatusCodes.OK).json({user,token,location:user.location})
    console.log(token)
    console.log(user);

    res.send('Login User')
}
const Update = async (req,res) => {
    const {email,name,lastName,password,location} = req.body
    if(!email ||!lastName ||!name ||!location){
        throw new BadRequest('Please Provide All Values ')
    }
    const user = await User.findOne({_id:req.user.userId})

    user.email = email
    user.lastName = lastName
    user.name = name
    user.location = location

    await user.save()

    const token = user.createJWT()

    res.status(StatusCodes.OK).json({user,token,location:user.location})
}
const Delete = async (req,res) => {
    res.send('Delete user')
}

export {Register,Update,Login,Delete}