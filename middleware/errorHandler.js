import {StatusCodes} from 'http-status-codes'

const errorHandler = (err,req,res,next) => {
    console.log(err)
    const dflterror = {
        statuscode : StatusCodes.INTERNAL_SERVER_ERROR,
        msg : 'Something Thing Went Wrong ... ',
    }
    res.status(dflterror.statuscode).json({msg:err})
}
export default errorHandler