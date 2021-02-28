var express = require('express');
var router = express.Router();
var searchController = require('../controllers/searchController')

router.post('/user-playlist', searchController.getPlaylist)

module.exports = router