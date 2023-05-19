import mongoose, { Schema } from "mongoose";

const JobSchema = new mongoose.Schema({
    company:{
        type:String,
        required:[true, 'Provide Your Company Name'],
        maxlength: 20
        },

    company:{
        type:String,
        required:[true, 'Provide Your Company Name'],
        maxlength: 100,
        },
    
    position:{
        type: String,
        required:[true, 'Provide Your Position'],
    },

    status: {
        type: String,
        enum: ['interview','declined','pending']
    },

    jobType: {
        type: String,
        enum: ['full-time','part-time','remote','internship'],
        default : 'full-time'
    },

    jobLocation: {
        type: String,
        default: 'my city',
        required: true,
      },
      createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'Users',
        required: [true, 'Please provide user'],
      },
    },
    { timestamps: true }
) 

export default mongoose.model('job',JobSchema)