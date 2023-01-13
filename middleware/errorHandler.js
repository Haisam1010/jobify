import {StatusCodes} from 'http-status-codes'

const errorHandler = (err,req,res,next) => {
    console.log(err)
    const dflterror = {
        StatusCodes : StatusCodes.INTERNAL_SERVER_ERROR,
        msg : 'Something Thing Went Wrong ... ',
    }
        if(err.name === 'ValidatorError'){
        dflterror.StatusCodes = StatusCodes.BAD_REQUEST
         dflterror.err = Object.values(err.errors).map((item)=>item.msg).join(',')
        // dflterror.msg = err.msg
     }

        if(err.code && err.code === 11000){

        dflterror.StatusCodes = StatusCodes.BAD_REQUEST
        dflterror.msg = `${Object.keys(err.keyValue)} Field Has To Be Unique`
        }

    res.status(dflterror.StatusCodes).json({msg:err})
    //  res.status(dflterror.statusCode).json({msg: dflterror.msg})
}
export default errorHandler