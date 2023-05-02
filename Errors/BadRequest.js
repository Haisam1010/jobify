import {StatusCodes} from 'http-status-codes'
import CustomApi from "./Custom-Error.js"


class BadRequest extends CustomApi {
    constructor(message){
        super(message)
        this.StatusCode = StatusCodes.BAD_REQUEST
    }
}
export default BadRequest

