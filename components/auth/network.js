const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')

const router = express.Router();

router.get('/', async (req,res) => {
    try {
        const action = await controller.getUsers();
        response.success(req,res,action,200);
    } catch (error) {
        response.error(req,res,error,500);
    }
})

router.post('/', async (req,res) =>{
    try {
        const newUser = await controller.addUser(req.body.user,req.body.age);
        response.success(req,res,newUser, 200);
    } catch (error) {
        response.error(req,res,error, 500);
    }
})

module.exports = router;