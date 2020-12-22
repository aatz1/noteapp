import { NextApiRequest, NextApiResponse } from "next";
import DefserverStatus from '../../utils/StatusCheck'



export default function Server(req: NextApiRequest, res: NextApiResponse) {
    try {
        const sucessservermsg = "Server working properly"
        DefserverStatus(sucessservermsg, 200, req, res)
    } catch {
        const errorservermsg = "Internal server error"
        DefserverStatus(errorservermsg, 500, req, res)
    }
}