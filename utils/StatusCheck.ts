function DefserverStatus(statusmsg: String, statuscode: Number, requisition: any, response: any) {
    const Haveerror = (errorcode: Number) => {
        if(errorcode === 500) {
            return "error 500"
        } else if (errorcode === 200) {
            return "no errors"
        } else if (errorcode === 405){
            return "Try GET method (error 405)"
        } else {
            return "error"
        }
    }

    response.statusCode = statuscode
    response.end(JSON.stringify({error: Haveerror(statuscode), msg: statusmsg}))
}

export default DefserverStatus;