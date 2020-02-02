var express = require('express');
var router = express.Router();

const { AUTH_PROVIDERS, VIEWS } = require('../app/constants');

/************* VISTAS ***************/
/* GET home page. */
router.get('/', (req, res) => {
    const tokenService = require('../app/services/jwt.token.service');
    const payload = tokenService.decodeToken(req.signedCookies['token'])

    res.render(VIEWS.home.render, { 
        credentials: {
            message: `Usuario autenticado con... ${AUTH_PROVIDERS.DB}`,
            user: payload.sub,
            provider: payload.provider
        }
    });
});

module.exports = router;
