const store = require('./store');

// FUNCION EXPRESIVA ASINCRONA QUE DEVUELVE UNA PROMESA QUE EN CASO DE QUE SE RESULVA
// MANDA UN OBJETO COMO RESPUESTA Y EN CASO CONTRARIO UN REJECT PARA SER TOMADO POR NUESTRO
// TRY CATCH DE NUESTRA RUTA 
const addMessage = async (user,message) => {
    return new Promise((resolve,reject) => {
        if(!user || !message){
            console.log("[messageController] Informacion Invalida");
            reject(new Error("Se requiere user y message"))
        }
        const fullMessage = {
            user: user,
            message, message,
            data: new Date()
        }
        // AGREGAMOS UNA FUNCION ASINCRONA PORQUE ESTAMOS DENTRO DE UNA FUNCION PROMESA
        // Y LA FUNCION AWAIT NECESITA UNA FUNCION ASINCRONA
            try{
                const dbMessage = store.add(fullMessage);
                console.log(dbMessage);
                resolve(fullMessage);
            }catch(err){
                reject("[controller] Error")
            }
    });
}

const getMessages = async () =>{
    return new Promise((resolve,reject) => {
        const dbMessage = store.getStore();
        resolve(dbMessage);
    })
}


module.exports = {
    addMessage,
    getMessages,
}