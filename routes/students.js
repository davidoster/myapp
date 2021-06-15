var express = require('express');
var router = express.Router();
var studentService = require('../services/dummyStudentService')


/* GET home page. */
router.get('/', function(req, res, next) {
  studentService.f().then((result) => {
        res.render('students', { title: 'Students', studentsArray: {data: result} })
  }
) 
});

module.exports = router