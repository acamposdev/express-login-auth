var jwt = require('jwt-simple');
var moment = require('moment');

/**
 * @class Service for JWT token utilities
 */
function JwtTokenService() {
    const TOKEN_SECRET = process.env.JWT_TOKEN_KEY || 'ssssshhhhh';

    /**
     * Method for JWT token generation
     * @param {User} user User entity object
     * @return {String} jwt_token JWT Token
     */
    let createToken = function(user) {
        // Payload object generation
        var payload = {
            sub: user,
            iat: moment().unix(),
            exp: moment().add(14, "days").unix(),
          };
          
          // return JWT Token generated
          return jwt.encode(payload, TOKEN_SECRET);
    }

    let decodeToken = function(token) {
        console.log('JWT Token service... '  , jwt.decode(token, TOKEN_SECRET));
    }

    return {
        createToken,
        decodeToken
    }
}

module.exports = JwtTokenService;