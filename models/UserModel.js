import mongoose from "mongoose";
import validator from "validator";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const UserSchema = new mongoose.Schema({
    name:
    {
    type:String, 
    required:[true,'Please Add Name'],
    minlenght:3, 
    maxlenght:20,
    trim:true
    },

    email:
    {
    type:String, 
    required:[true,'Please Add Email'],
    validate:{
        validator:validator.isEmail,
        message: 'Please Provide Valid Email'
    },
    unique:true,
    },

    password:
    {
    type:String, 
    required:[true,'Please Add Password'],
    minlenght:6,
    select: false
    },

    lastName:
    {
    type:String, 
    maxlenght:20,
    default: '',
    trim:true
    },

    location:
    {
    type:String, 
    maxlenght:20,
    default: 'my city',
    trim:true
    },
})

UserSchema.pre('save',async function(){
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password,salt)
})

UserSchema.methods.createJWT = function (){
    return jwt.sign({userId:this._id},process.env.JWR_SECRET,{expiresIn:process.env.JWT_LIFETIME})
}
export default mongoose.model('User',UserSchema)