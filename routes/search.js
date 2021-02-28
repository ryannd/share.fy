var express = require('express');
var router = express.Router();
var searchController = require('../controllers/searchController')

router.post('/user-playlists', searchController.getPlaylist)
router.post('/user', searchController.getUser)
router.post('/tracks', searchController.getTracks)

module.exports = router