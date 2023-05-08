import {StatusCodes} from 'http-status-codes'
import CustomApi from './Custom-Error.js'

class UnAuthaticate extends CustomApi {
    constructor(message){
        super(message)
        this.StatusCodes = StatusCodes.UNAUTHORIZED
    }
}

export default UnAuthaticate