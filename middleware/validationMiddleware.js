import { body,param,validationResult } from "express-validator";
import {BadRequestError,NotFoundError}  from "../Errors/CustomErrors.js";
import { JOB_STATUS,JOB_TYPE } from "../utils/constatnt.js";
import mongoose from "mongoose";
import JobModel from "../Models/JobModel.js";
import UserModel from "../Models/UserModel.js";
import isEmail from "validator/lib/isEmail.js";


const withValidationErrors = (validateValues)=> {
    return [
        validateValues,
        (req,res,next)=>{
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                const errorMessage = errors.array().map((error)=>error.msg)
                throw new BadRequestError(errorMessage)
            }
            next()
        },
    ]
};

export const ValidationJobInput = withValidationErrors([
    body('company').notEmpty().withMessage('Company is required'),
    body('position').notEmpty().withMessage('Position is required'),
    body('jobStatus').isIn(Object.values(JOB_STATUS)).withMessage('Job Status is required'),

])

export const validateId = withValidationErrors([
    param('id').custom(async (value)=>{
      const validId =  mongoose.Types.ObjectId.isValid(value)
      if(!validId) throw new BadRequestError('Invalid Id')
      const job = await JobModel.findById(value)
        if(!job) throw new NotFoundError(`No job with id of ${value}`)
    })
])

export const validateRegisterInput = withValidationErrors([
    body('name').notEmpty().withMessage('Name is required'),
    body('email').notEmpty().withMessage('Email is required').isEmail().withMessage('Email is not valid').custom(async (email)=>{
        const user = await UserModel.findOne({email})
        if(user) throw new BadRequestError('Email already exists')
    }),
    body('password').notEmpty().withMessage('Password is required').isLength({min:6}).withMessage('Password must be at least 6 characters long'),
    body('location').notEmpty().withMessage('Location is required')
])
export const validateLoginInput = withValidationErrors([
    body('email').notEmpty().withMessage('Email is required').isEmail().withMessage('Email is not valid'),
    body('password').notEmpty().withMessage('Password is required').isLength({min:6}).withMessage('Password must be at least 6 characters long'),
])