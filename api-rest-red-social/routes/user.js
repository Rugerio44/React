const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

//Define las rutas

router.get('/prueba-usuario', userController.pruebaUser);

// Exportar router 
module.exports = router;
