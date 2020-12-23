function DefserverStatus(statusmsg: String, statuscode: Number, data: Object, requisition: any, response: any,) {
    function checksucess() {
        if(statuscode === 200) {
            return true;
        } else {
            return false;
        }
    }

    var issucess = checksucess()

    response.statusCode = statuscode
    response.end(JSON.stringify({ success: issucess, statuscode: statuscode, msg: statusmsg, data: data }))
}

export default DefserverStatus;