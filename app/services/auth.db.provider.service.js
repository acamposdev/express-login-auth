
const users = require('../specs/mocks/users').USERS;

const dbProviderService = {
    login: (username, password) => {
        return users.find((usr) => (usr.user === username && usr.password === password));
    }
}

module.exports = dbProviderService;