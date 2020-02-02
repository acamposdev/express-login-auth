const users = require('../specs/mocks/users').USERS;

function UserService() {

    let get = () => {
        return users;
    }

    let login = (user, password) => {
        return users.find((usr) => (usr.user === user && usr.password === password));
    }

    return {
        get,
        login
    }
}

module.exports = new UserService(); 