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
    let createToken = function(payload) {
        // Payload object generation
        var payload = {
            sub: payload.user,
            iat: moment().unix(),
            exp: moment().add(14, "days").unix(),
            provider: payload.provider
          };
          
          // return JWT Token generated
          return jwt.encode(payload, TOKEN_SECRET);
    }

    let decodeToken = function(token) {
        return jwt.decode(token, TOKEN_SECRET);
    }

    return {
        createToken,
        decodeToken
    }
}

module.exports = new JwtTokenService();