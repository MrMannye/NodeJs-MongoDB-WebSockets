const mongoose = require('mongoose');
const Model = require('./model')

mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://manu:ngfq5J9kO0kJfvwo@cluster0.clme8.mongodb.net/Curso_NodeJs?retryWrites=true&w=majority",{
    useNewUrlParser: true
})
console.log("[db] Conexion exitosa")

const add = (message) => {
    return new Promise((resolve,reject) => {
    //     if(!message){
    //         reject("[addStore] Mensaje no recibido")
    //     }else{
    //         list.push(message);
    //         resolve("[addStore] Mensaje agregado correctamente")
    //     }
        const myMessage = new Model(message);
        myMessage.save();
        resolve("[addStore] Mensaje agregado correctamente")
    })
}

const getStore = () => {
    return list;
}

module.exports = {
    add, 
    getStore,
}