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

                DefserverStatus("No errors", 200, notes, req, res)
               
            } catch(err) {
                DefserverStatus("Internal server error", 500, {}, req, res)
            }
            
        } else { //method post
            const note = await Note.create(req.body)

            DefserverStatus("No errors", 200, note, req, res)
        }
    } catch(err) {
        DefserverStatus("Internal server error", 500, {}, req, res) 
    }

}
