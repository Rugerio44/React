const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user');

//Define las rutas

router.get('/prueba-usuario', UserController.pruebaUser);

// Exportar router 
module.exports = router;
 