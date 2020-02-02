var express = require('express');
var router = express.Router();

const loginController = require('../app/controllers/login.controller');

/************* VISTAS ***************/
/* GET home page. */
router.get('/', loginController.home);
router.post('', loginController.login);

module.exports = router;
