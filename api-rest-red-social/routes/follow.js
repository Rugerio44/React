const express = require('express');
const router = express.Router();
const FollowController = require('../controllers/follow');
const check = require('../middlewares/auth');

//Define las rutas

router.get('/prueba-follow', FollowController.pruebaFollow);
router.post('/save', check.auth, FollowController.save);
router.delete('/unfollow/:id', check.auth, FollowController.deleteFollow);
router.get('/following/:id?/:page?', check.auth, FollowController.following);
router.get('/followers/:id?/:page?', check.auth, FollowController.followers);

// Exportar router 
module.exports = router;
