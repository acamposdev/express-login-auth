const { AUTH_PROVIDERS, VIEWS } = require('../constants');

function LoginController() {
    const AuthService = require('../services/interfaces/auth.service');
    const tokenService = require('../services/jwt.token.service');

    let home = (req, res) => {
        res.render(VIEWS.login.render);
    }


    let login = (req, res) => {
        const {
            username,
            password
        } = req.body;

        const authProvider = AuthService.getInstance(AUTH_PROVIDERS.DB);
        let user = authProvider.login(username, password);
        
        if (user) {
            const token = tokenService.createToken({
                user: user,
                provider: AUTH_PROVIDERS.DB
            });

            res.cookie('token', token, { signed: true })
            
            return res.redirect('/home');
        }

        res.render(VIEWS.login.render, {
            message: 'El usuario o la contraseño no son correctos'
        });
    }

    return {
        home,
        login
    }
}

module.exports = new LoginController();