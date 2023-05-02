import {StatusCodes} from 'http-status-codes'
import CustomApi from './Custom-Error.js'


class NotFound extends CustomApi {
    constructor(message){
        super(message)
        this.StatusCode = StatusCodes.NOT_FOUND
    }
}

export default NotFound