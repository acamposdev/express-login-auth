var express = require('express');
var router = express.Router();

/*
app.use(jwt({
  secret: 'hello world !',
  credentialsRequired: false,
  getToken: function fromHeaderOrQuerystring (req) {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        return req.headers.authorization.split(' ')[1];
    } else if (req.query && req.query.token) {
      return req.query.token;
    }
    return null;
  }
}));
*/

router.use((req, res, next) => {
  console.log('auth middleware...');
  return next();
})

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('cookie -> ' , JSON.stringify(req.cookies))
  console.log('signed -> ' , JSON.stringify(req.signedCookies))
  res.send('respond with a resource');
});

module.exports = router;
