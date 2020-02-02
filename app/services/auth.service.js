const AuthService = {
    getInstance: (provider) => {
        switch (provider) {
            case 'DB':
                return require('../services/auth.db.provider.service');
                break;
        
            default:
                break;
        }
    }
}

module.exports = AuthService;