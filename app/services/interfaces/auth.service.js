const AUTH_PROVIDERS = require('../../constants').AUTH_PROVIDERS;

const AuthService = {
    
    /**
     * Interfaz para proveer un metodo de autenticacion de usarios. Todas las implementaciones
     * que proporciona la interfaz deben implementar los siguientes metodos:
     * 
     *      · login(username, password)
     * 
     * @param {String} provider Proveedor de autenticacion (ver constants AUTH_PROVIDERS)
     */
    getInstance: (provider) => {
        switch (provider) {
            case AUTH_PROVIDERS.DB:
                return require('../../services/auth.db.provider.service');
                break;
        
            default:
                break;
        }
    }
}

module.exports = AuthService;