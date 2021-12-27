const express = require("express");

const app = express();
const PORT = process.env.PORT || 3001;
// IMPORTAMOS NUESTRAS RUTAS PARA PODER USARLAS 
const router = require('./network/routes')

app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));

router(app);
/* MOSTRAR ARCHIVOS ESTATICOS CON NODE JS */
app.use('/app', express.static('public'));



app.listen(PORT, () => {
    console.log("Escuchando en puerto " + PORT);
})


