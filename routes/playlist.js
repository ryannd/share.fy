var express = require('express');
var router = express.Router();
var playlistController = require('../controllers/playlistController')

router.post('/get-list', playlistController.getListData)

module.exports = router