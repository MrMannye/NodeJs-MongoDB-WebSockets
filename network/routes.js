const message = require('../components/messages/network')
const user = require('../components/auth/network')
const chat = require('../components/chat/network')

const routes = (server) => {
    server.use('/message', message);
    server.use('/user', user);
    server.use('/chat', chat);
}

module.exports = routes;