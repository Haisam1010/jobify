class NotFound extends CustomApiError {
    constructor(message){
        super(message)
        this.statusCode = StatusCodes.NOT_FOUND
    }
}

export default NotFound