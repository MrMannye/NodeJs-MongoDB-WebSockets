
// ARCHIVO QUE VA A CONTENER LAS RUTAS QUE VAMOS A USAR EN NUESTRO INDEX
const express = require("express");
const router = express.Router();
const response = require('../../network/response');
const controller = require('./controller')

router.get('/', async (req,res) => {
    try{
        const action = await controller.getMessages();
        response.success(req,res,action, 200);
    }catch(err){
        response.error(req,res,err,500);
    }
})

router.post('/', async (req,res) => {
    // FUCNIONES ASINCRONA, INTENTAMOS Y ESPERAMOS A QUE SE RESUELVA LA PROMESA DE NUESTRA FUNCION 
    // EN CASO DE QUE SE RESUELVA "TRY" TOMA COMO RESUELTA LA PROMESA Y EJECUTA SUCCESS
    // EN CASO CONTRARIO TENEMOS UN REJECT Y PASAMOS AL CATCH
    try{
        const action = await controller.addMessage(req.body.user,req.body.message)
        response.success(req,res,action, 200);
        console.log(action)
    } catch (error){
        response.error(req,res,error, 500);
    }
})

router.patch('/:id', async(req,res) => {
    try{
        const action = await controller.updateMessages(req.params.id, req.body.text);
        response.success(req,res,action,200);
    }catch(err){
        response.error(req,res,err,500);
    }
})

router.delete('/:id', async(req,res) => {
    try {
        const action = await controller.deleteMessage(req.params.id);
        response.success(req,res,action,200);
    } catch (err) {
        response.error(req,res,err,500);
    }
})

module.exports = router;