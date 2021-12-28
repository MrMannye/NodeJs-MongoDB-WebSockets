const mongoose = require('mongoose');

const Schema = mongoose.Schema; 
const mySchema = new Schema({
    user: {
        type: Schema.ObjectId,
        ref: 'Users' // REFERNCIA A NUESTRA COLLECTION 
    },
    message: {
        type: String,
        requiered: true,
    },
    date: Date,
});

const model = mongoose.model('Messages', mySchema);

module.exports = model;