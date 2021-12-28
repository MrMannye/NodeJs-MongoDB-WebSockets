const message = require('../components/messages/network')
const user = require('../components/auth/network')

const routes = (server) => {
    server.use('/message', message);
    server.use('/user', user);
}

module.exports = routes;