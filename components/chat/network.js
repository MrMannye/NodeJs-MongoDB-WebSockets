const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')
const router = express.Router();

router.get('/:userId',async (req,res) => {
    try{
        const action = await controller.getChat(req.params.userId);
        response.success(req,res,action,200);
    }catch(error){
        response.error(req,res,error,500);
    }
})

router.post('/', async (req,res) => {
    try {
        const action = await controller.addChat(req.body.users);
        response.success(req,res,action,200); 
    } catch (error) {
        response.error(req,res,error,500);
    }
})



module.exports = router;