var express = require('express');
var router = express.Router();
var loginController = require('../controllers/loginController')

router.get('/', loginController.login)
router.get('/url', loginController.url)

module.exports = router;
