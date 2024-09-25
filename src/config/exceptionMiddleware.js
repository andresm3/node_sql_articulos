const {statusCode, statusResponse}=require("../config/httpStatusCodes")
module.exports = class extends Error {
    constructor(status, message){
        super(message)
        this.name = statusCode[status]
    }
}