var express = require('express');
var router = express.Router();
var searchController = require('../controllers/searchController')

router.post('/user-playlists', searchController.getPlaylist)

module.exports = router