
// ARCHIVO QUE VA A CONTENER LAS RUTAS QUE VAMOS A USAR EN NUESTRO INDEX

const express = require("express");
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller')

router.get('/', (req,res) => {
    console.log(req.headers);
    res.header({
        "custom-header": "Valor Personalizado",
    })
    response.success(req,res,"Lista de mensajes");
})

router.post('/', async (req,res) => {
    try{
        const action = await controller.addMessage(req.body.user,req.body.message)
        response.success(req,res,action, 200);
        console.log(action)
    } catch (error){
        response.error(req,res,error, 500);
    }
})

module.exports = router;