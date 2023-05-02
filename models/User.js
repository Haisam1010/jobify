import mongoose from "mongoose";
import validator from "validator";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const userSchema = new mongoose.Schema({
    name:{
    type:String,
    required:[true, 'Please Add Name '],
    minlength:3,
    maxlength:20,
    trim:true
    },

    email: {
        type:String, 
        required:[true,'Please Add Email'],
        validate:{
            validator:validator.isEmail,
            message: 'Please Provide Valid Email'
        },
        unique:true,
    },

    password:{
        type:String,
        required:[true, 'Please Add Password '],
        minlength:5,
        select:false

    },

    lastName: {
    type:String, 
    maxlenght:20,
    default: '',
    trim:true
    },

    location:{
    type:String, 
    maxlenght:20,
    default: 'my city',
    trim:true
    },

})

userSchema.pre('save',async function(){
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password,salt)
})

userSchema.methods.createJWT = function () {
    return jwt.sign({userId: this._id},process.env.JWT_SCRT,{expiresIn:process.env.JWT_LIFE})
}

userSchema.methods.comparePassword = async function (candidatePassword) {
    const isMatch = await bcrypt.compare(candidatePassword, this.password)
    return isMatch
}

export default mongoose.model('Users',userSchema)