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
        console.log(fullMessage);
        resolve(fullMessage);
    });
}

module.exports = {
    addMessage,
}