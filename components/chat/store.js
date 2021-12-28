const Model = require('./model');

const get = (user) => {
    return new Promise(async(resolve,reject) =>{
        let filter = {};
        if(user){
            filter = {
                users: user,
            }
        }
        Model.find(filter)
        .populate('users')
        .exec((error,populated) =>{
            if(error){
                reject(error);
            }
            resolve(populated);
        })
    })
}

const add = (chat) =>{
    return new Promise(async(resolve,reject) =>{
        const myChat = new Model(chat);
        await myChat.save();
        resolve(myChat);
    })
}

module.exports = {
    get,
    add
}