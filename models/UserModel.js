import mongoose from "mongoose";

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
    unique:true,
    },
    
    password:
    {
    type:String, 
    required:[true,'Please Add Email'],
    unique:true,
    }
})