import {StatusCodes} from 'http-status-codes'

const errorHandler = (err,req,res,next) => {
    console.log(err)
    const defaultError = {
        statusCode : err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        message :err.message || 'Something Thing Went Wrong ... ',
    }
        if(err.name === 'ValidatorError'){
            defaultError.statusCode = StatusCodes.BAD_REQUEST
            defaultError.err = Object.values(err.errors).map((item)=>item.message).join(',')
        // defaultError.msg = err.msg
     }

        if(err.code && err.code === 11000){

            defaultError.statusCode = StatusCodes.BAD_REQUEST
            defaultError.msg = `${Object.keys(err.keyValue)} Field Has To Be Unique`
        }

    res.status(defaultError.statusCode).json({message:err})
    //  res.status(defaultError.statusCode).json({msg: defaultError.msg})
}
export default errorHandler