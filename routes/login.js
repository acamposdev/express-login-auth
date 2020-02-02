var express = require('express');
var router = express.Router();

const userController = require('../app/controllers/login.controller');

router.post('', userController.login);

module.exports = router;
