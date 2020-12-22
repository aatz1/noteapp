import DBconnect from '../../../utils/dbconnect';
import Note from '../../../models/Note';
import checkmethod from '../../../utils/checkmethod'
import DefserverStatus from '../../../utils/StatusCheck'

DBconnect();

export default async (req, res) => {
    try{
        const methodisget = checkmethod(true, req, res)
        if(methodisget) {
            try { //method get
                const notes = await Note.find({});
                res.status(200).json({ sucess: true, data: notes})
            } catch(err) {
                DefserverStatus("Internal server error", 500, req, res)
            }
            
        } else { //method post
            const note = await Note.create(req.body)

            res.status(201).json({ sucess: true, data: note})
        }
    } catch(err) {
        DefserverStatus("Internal server error", 500, req, res) 
    }

}
