const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user');
const check = require('../middlewares/auth');
const multer = require('multer');

//Configuracion de subirda (Middleware)

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/avatars');
  },
  filename: function (req, file, cb) {
    cb(null,"avatar-"+Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });


//Define las rutas

router.get('/prueba-usuario', check.auth, UserController.pruebaUser);
router.post('/registro', UserController.register);
router.post('/login', UserController.login); 
router.get('/profile/:id', check.auth, UserController.profile);
router.get('/list/:page?', check.auth, UserController.list);
router.put('/update', check.auth, UserController.update);
router.post('/upload', [check.auth, upload.single("file0")], UserController.upload);
router.get('/avatar/:file' , UserController.avatar);
router.get("/counters/:id?", check.auth, UserController.counters);




// Exportar router 
module.exports = router; 

