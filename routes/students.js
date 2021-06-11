var express = require('express');
var router = express.Router();

var studentService = require('../services/studentService')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('students', { title: 'Students', 
    studentsArray: studentService.data })
});

module.exports = router