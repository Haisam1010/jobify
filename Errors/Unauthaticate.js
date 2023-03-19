import {StatusCodes} from 'http-status-codes'
import CustomApiError from './CustomError.js'

class Unauthaticate extends CustomApiError {
    constructor(message){
        super(message)
        this.statusCode = StatusCodes.UNAUTHORIZED
    }
}

export default Unauthaticate