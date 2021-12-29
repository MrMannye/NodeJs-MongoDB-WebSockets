const { socket } = require('../../socket');
const store = require('./store');

// FUNCION EXPRESIVA ASINCRONA QUE DEVUELVE UNA PROMESA QUE EN CASO DE QUE SE RESULVA
// MANDA UN OBJETO COMO RESPUESTA Y EN CASO CONTRARIO UN REJECT PARA SER TOMADO POR NUESTRO
// TRY CATCH DE NUESTRA RUTA 
const addMessage = async (chat, user,message) => {
    return new Promise(async (resolve,reject) => {
        if(!user || !message || !chat){
            console.log("[messageController] Informacion Invalida");
            reject(new Error("Se requiere user y message"))
        }
        const fullMessage = {
            chat: chat,
            user: user,
            message, message,
            date: new Date()
        }
        // AGREGAMOS UNA FUNCION ASINCRONA PORQUE ESTAMOS DENTRO DE UNA FUNCION PROMESA
        // Y LA FUNCION AWAIT NECESITA UNA FUNCION ASINCRONA
            try{
                const dbMessage = await store.add(fullMessage);
                console.log(dbMessage);
                socket.io.emit('message', fullMessage);
                resolve(fullMessage);
            }catch(err){
                reject("[controller] Error")
            }
    });
}

const getMessages = (idChat) =>{
    return new Promise(async(resolve,reject) => {
        try {
            const dbMessage = await store.getStore(idChat);
            resolve(dbMessage);
        } catch (error) {
            reject(error);
        }
    })
}

const updateMessages = (id, message) => {
    return new Promise( async (resolve,reject) => {
        if(!id || !message){
            reject(new Error("[controller] Datos insuficientes"))
        }
        try{
            const updatedMessage = await store.update(id,message);
            resolve(updatedMessage);
        }catch(err){
            reject(new Error("[controller] Promesa de store"));
        }   
    })
}

const deleteMessage = (id) =>{
    return new Promise(async (resolve,reject) =>{
        if(id === null){
            reject("[controller] Informacion insuficiente")
        }
        try {
            const deletedMessage = await store.deleteMessage(id);
            resolve(deletedMessage)
        } catch (error) {
            reject("[controller] Promise store error")
        }
    })
}

module.exports = {
    addMessage,
    getMessages,
    updateMessages,
    deleteMessage
}