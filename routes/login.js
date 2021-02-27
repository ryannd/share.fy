var express = require('express');
var router = express.Router();
var loginController = require('../controllers/loginController')

router.get('/', loginController.login)
router.get('/url', loginController.url)
router.get('/test', loginController.test)

module.exports = router;
