const store = require('./store')

const getChat = (user) => {
    return new Promise(async(resolve,reject) =>{
        if(!user){
            reject("[controller] Usuario faltante");
        }
        try{
            const users = await store.get(user);
            resolve(users);
        }catch(error){
            reject(error);
        }
    })
}

const addChat = (users) =>{
    return new Promise(async(resolve,reject) =>{
        if(!users || !Array.isArray(users)){
            reject("[controller] Usuarios incorrectos")
        }
        const chat = {
            users: users,
        }
        try{
            const addUsers = await store.add(chat);
            resolve(addUsers);
        }catch(error){
            reject(error);s
        }
    })
    
}

module.exports = {
    getChat,
    addChat
}