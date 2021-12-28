const store = require('./store')

const getUsers = () => {
    return new Promise(async(resolve,reject) =>{
        const users = await store.get();
        resolve(users);
    })
}

const addUser = (user,age) =>{
    return new Promise(async(resolve,reject) =>{
        if(!user || !age){
            reject('[controller] Usuario o Edad faltante');
        }
        const fullUser = {
            user: user,
            age: age,
            date: new Date()
        }
        try {
            const addedUser = await store.add(fullUser);
            resolve(addedUser);
        } catch (error) {
            reject("[controller] Usuario no agregado")
        }
        
    })
}


module.exports = {
    getUsers,
    addUser
}