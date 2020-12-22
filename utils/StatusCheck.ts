function DefserverStatus(statusmsg: String, statuscode: Number, requisition: any, response: any) {

    response.statusCode = statuscode
    response.end(JSON.stringify({error: statuscode, msg: statusmsg}))
}

export default DefserverStatus;