function LoginController() {
    const AuthService = require('../services/auth.service');
    const TokenService = require('../services/jwt.token.service');
    const tokenService = new TokenService();

    let login = (req, res, next) => {
        const {
            username,
            password
        } = req.body;

        const authProvider = AuthService.getInstance('DB');
        let user = authProvider.login(username, password);
        
        if (user) {
            const token = tokenService.createToken(user);

            res.cookie('token', token, { signed: true })
            
            return res.send({
                token: token
            });
        }

        res.render('index', {
            title: null,
            message: 'El usuario o la contraseño no son correctos'
        });
    }

    return {
        login
    }
}

module.exports = new LoginController();