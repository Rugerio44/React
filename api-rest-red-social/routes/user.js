const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user');

//Define las rutas

router.get('/prueba-usuario', UserController.pruebaUser);
router.post('/registro', UserController.register);

// Exportar router 
module.exports = router;
