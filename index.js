const express = require("express");
const app = express();
const server = require('http').Server(app);

const PORT = process.env.PORT || 3001;
// IMPORTAMOS NUESTRAS RUTAS PARA PODER USARLAS 
const router = require('./network/routes')
const socket = require('./socket')
const db = require('./db')

db();
app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));

socket.connect(server)
router(app);
/* MOSTRAR ARCHIVOS ESTATICOS CON NODE JS */
app.use('/app', express.static('public'));



server.listen(PORT, () => {
    console.log("Escuchando en puerto " + PORT);
})


