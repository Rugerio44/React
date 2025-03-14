const express = require('express');
const router = express.Router();
const multer = require('multer');
const PublicationController = require('../controllers/publication');
const check = require('../middlewares/auth');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/publications/');
  },
  filename: function (req, file, cb) {
    cb(null,"pub-"+Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

//Define las rutas

router.get('/prueba-publication', PublicationController.pruebaPublication);
router.post('/save', check.auth, PublicationController.save);
router.get('/details/:id', check.auth  , PublicationController.details);
router.delete('/remove/:id', check.auth, PublicationController.remove);
router.get('/user/:id', check.auth, PublicationController.user);
router.post('/upload/:id', [check.auth, upload.single('file0')], PublicationController.upload);
router.get('/media/:file', PublicationController.media);
router.get('/feed/:page?', check.auth, PublicationController.feed);

// Exportar router 
module.exports = router; 
