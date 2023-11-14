//Elaborado por Luis Martinez

const express = require('express');
const router = express.Router();
const controller = require('../controllers/reservacion');

//POST
router.post('/', (req, res) =>{
    controller.enviarFormulario(req, res);    
});

module.exports = router;