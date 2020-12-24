import { NextApiRequest, NextApiResponse } from "next";
import DefserverStatus from '../../utils/StatusCheck'



export default function Server(req: NextApiRequest, res: NextApiResponse) {
    try {
        DefserverStatus("Server working properly", 200, {}, req, res)
    } catch {
        DefserverStatus("Internal server error", 500, {}, req, res)
    }
}
