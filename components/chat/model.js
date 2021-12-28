const mongoose = requiere('mongoose');

const Schema = mongoose.Schema();
const mySchema = new Schema({
    users:[{
        type: Schema.ObjectId,
        ref: 'users'
    }]
})

const model = mongoose.model('Chat', mySchema);
module.exports = model;