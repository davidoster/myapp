var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource<br><a href="/">Back to Home</a>');
});

module.exports = router;
