const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const mySchema = new Schema({
    user: {
        type: String,
        required: true,
    },
    age: Number,
    date: Date
})

const model = mongoose.model("Users", mySchema);
module.exports = model;