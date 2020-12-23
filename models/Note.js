import { Schema, models, model } from 'mongoose';

const NoteSchema  = new Schema({
    title: {
        type: String,
        required: [true, 'Please add a title'],
        unique: true,
        trim: true,
        maxlength: [40, 'Title cant have more than 40 characters']
    }, 
    description: {
        type: String,
        required: true,
        maxlength: [200, 'Description cant have more than 200 characters']
    }
})


module.exports = models.Note || model('Note', NoteSchema);