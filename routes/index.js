var express = require('express');
var router = express.Router();

const { VIEWS } = require('../app/constants');

/************* VISTAS ***************/
/* GET home page. */
router.get('/', (req, res) => {
    res.render(VIEWS.login.render);
});

module.exports = router;
