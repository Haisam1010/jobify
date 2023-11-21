import { body,validationResult } from "express-validator";
import {BadRequestError}  from "../Errors/CustomErrors.js";
import { JOB_STATUS,JOB_TYPE } from "../utils/constatnt.js";

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

export const ValidationJobInput = validationResult([
    body('company').notEmpty().withMessage('Company is required'),
    body('position').notEmpty().withMessage('Position is required'),
    body('jobStatus').isIn(Object.values(JOB_STATUS)).withMessage('Job Status is required'),
    body('jobType').isIn(Object.values(JOB_TYPE)).withMessage('Job Type is required'),

])