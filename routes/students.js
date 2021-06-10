var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('students', { title: 'Students', studentsArray: [{name: 'Herge', email: 'herge@herge.com'}, {name: 'Herge', email: 'herge@herge.com'}] });
});

module.exports = router;