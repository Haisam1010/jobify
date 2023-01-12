import {StatusCodes} from 'http-status-codes'

const errorHandler = (err,req,res,next) => {
    console.log(err)
    const dflterror = {
        statuscode : StatusCodes.INTERNAL_SERVER_ERROR,
        msg : 'Something Thing Went Wrong ... ',
    }
   if(err.name === 'ValidatorError'){
        dflterror.statuscode = StatusCode.BAD_REQUEST
        // dflterror.err = object.values(err.errors).map((item)=>item.msg).join(',')
        dflterror.msg = err.msg
     }
    // res.status(dflterror.statuscode).json({msg:err})
     res.status(dflterror.statuscode).json({msg: dflterror.msg})
}
export default errorHandler