import mongoose from "mongoose";
import validator from "validator";

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
export default mongoose.model('User',UserSchema)