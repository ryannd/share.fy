var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController')

router.get('/info', userController.getInfo)
router.get('/playlists', userController.getPlaylists)

module.exports = router;