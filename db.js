const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

async function connect(){
    await mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.clme8.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`,{
        useNewUrlParser: true
    })
    console.log("[db] Conexion exitosa")
}

module.exports = connect;