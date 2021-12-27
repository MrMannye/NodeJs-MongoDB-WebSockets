const mongoose = require('mongoose');
const Model = require('./model')

mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://manu:ngfq5J9kO0kJfvwo@cluster0.clme8.mongodb.net/Curso_NodeJs?retryWrites=true&w=majority",{
    useNewUrlParser: true
})
console.log("[db] Conexion exitosa")

const add = (message) => {
    return new Promise(async (resolve,reject) => {
    //     if(!message){
    //         reject("[addStore] Mensaje no recibido")
    //     }else{
    //         list.push(message);
    //         resolve("[addStore] Mensaje agregado correctamente")
    //     }
        const myMessage = new Model(message);
        await myMessage.save();
        resolve("[addStore] Mensaje agregado correctamente")
    })
}

const getStore = async () => {
    const messages = await Model.find();
    return messages;
}

const update = (id,message) => {
    return new Promise(async (resolve,reject) =>{
        const beforeMessage = await Model.findOne({
            _id: id,
        })
        beforeMessage.message = message;
        const newMessage = await beforeMessage.save();
        resolve(newMessage);
    }) 
}

const deleteMessage = (id) => {
    return new Promise(async (resolve,reject) =>{
        let filter = {_id: id}
        await Model.deleteOne(filter);
        resolve("Usuario eliminado")
    })
}

module.exports = {
    add, 
    getStore,
    update,
    deleteMessage
}