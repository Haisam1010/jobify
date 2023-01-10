import UserModel from "../models/UserModel.js"

const Register = async(req,res) =>{
   
        const user = await UserModel.create(req.body)
        res.status(201).json({msg:user})
  
}
const Login = async(req,res) =>{
    res.send('Login Page').json({msg:'hello reg'})
}
const Update =async(req,res) =>{
    res.send('Update Page').json({msg:'hello reg'})
}

export {Register,Login,Update}