const Model = require('./model')

const get = async () =>{
    const users = await Model.find();
    return users;
}

const add = async (user) => {
    return new Promise(async(resolve,reject) =>{
        if(user === null){
            reject("[store] Usuario vacio")
        }
        const newUser = await new Model(user);
        newUser.save();
        resolve(newUser)
    })
}

module.exports = {
    get,
    add
}