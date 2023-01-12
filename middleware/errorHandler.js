import {StatusCodes} from 'http-status-codes'

const errorHandler = (err,req,res,next) => {
    console.log(err)
    const dflterror = {
        statusCode : StatusCodes.INTERNAL_SERVER_ERROR,
        msg : 'Something Thing Went Wrong ... ',
    }
   if(err.name === 'ValidatorError'){
        dflterror.statusCode = StatusCode.BAD_REQUEST
         dflterror.err = object.values(err.errors).map((item)=>item.msg).join(',')
        // dflterror.msg = err.msg
     }
    // res.status(dflterror.statuscode).json({msg:err})
     res.status(dflterror.statusCode).json({msg: dflterror.msg})
}
export default errorHandler