const express = require("express");
const res = require("express/lib/response");
const router = express.Router();
const response = require('./response');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));
app.use(router);


router.get("/", (req,res) => {
    res.send("Hola curso de NodeJS-MongoDB");
})

router.get('/message', (req,res) => {
    console.log(req.headers);
    res.header({
        "custom-header": "Valor Personalizado",
    })
    response.success(req,res,"Lista de mensajes");
})

router.post('/message', (req,res) => {
    if(req.query.error == 'ok'){
        response.error(req,res,"Error en el query", 400)
    }else{
        response.success(req,res, "Query correctamente", 200);
    }
})

app.listen(PORT, () => {
    console.log("Escuchando en puerto " + PORT);
})


