import DBconnect from '../../../utils/dbconnect';
import Note from '../../../models/Note';
import checkmethod from '../../../utils/checkmethod';
import DefserverStatus from '../../../utils/StatusCheck';

DBconnect();


export default async (req, res) => {
    const {
        query: { id },
        method
    } = req;
    
    try {
        const getmethod = checkmethod(true, req, res);
        if(getmethod){
             try{
                const note = await Note.findById(id)

                if(!note) {
                    DefserverStatus("Note dosent exits", 500, req, res)
                }

                res.status(200).json({ error: "no errors", statuscode: 200, data: note })
                

             } catch(err) {
                DefserverStatus("Internal server error", 500, req, res)
             }
        } else {
            if(req.method === 'PUT') {
                try{
                    const note = await Note.findByIdAndUpdate(id, req.body, {
                        new: true,
                        runValidators: true
                    })

                    if(!note) {
                        return DefserverStatus("Note dosent exits", 500, req, res)
                    }

                    res.status(200).json({ error: "no errors", statuscode: 200, data: note })



                } catch(err) {
                    DefserverStatus("Internal server error", 500, req, res)
                }
            } else if(req.method === 'DELETE') {
                try{
                    const deleteNote = await Note.deleteOne({ _id: id })

                    if(!deleteNote) {
                        DefserverStatus("Internal server error", 500, req, res)
                    }

                    res.status(200).json({ error: "no errors", statuscode: 200, data: {} })

                } catch(err) {
                    DefserverStatus("Internal server status", 500, req, res)
                }
            } else {
                DefserverStatus("Bad method", 500, req, res)
            }
        }

    } catch(err) {
        DefserverStatus("Internal server error", 500, req, res)
    }


}