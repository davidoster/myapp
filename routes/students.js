var express = require('express');
var router = express.Router();
var studentService = require('../services/studentService')
var Student = require('../models/student').Student


/* GET all students */
router.get('/', function(req, res, next) {
  studentService.getAllStudents().then((result) => {
        res.render('students', { title: 'Students', studentsArray: {data: result} })
  }
) 
})

/* GET a new student - has an HTML form */
// http://localhost:3000/students/new
router.get('/new', function(req, res, next) {
  res.render('newStudent')
})


/* POST a student */
router.post('/', function(req, res, next) {
  // console.log(req.body)
  let aStudent = new Student(null,req.body.fname, req.body.lname, req.body.hobby)
  // INSERT INTO db this aStudent
  console.log(aStudent.toString())
  res.render('index', { title: 'Express', course: "CB13 JavaScript Part" })
})


module.exports = router