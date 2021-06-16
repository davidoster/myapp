var db = require("mysql2")
var dbhost_ra1 = {
    host: "ra1.anystream.eu",
    port: "5420",
    user: "cb12ptjs",
    password: "cb12ptjs",
    database: "cb12ptjs"
};



async function getAllStudents() {
    var sql = "SELECT * FROM `cb12ptjs`.`students`;";
    var con = db.createConnection(dbhost_ra1);
    let promise = new Promise((resolve, reject) => {
        con.connect(function (err) {
            let data;
            if(err) {
                console.log("Error Connecting");
            } else {
                console.log("Yeap, this is MySQL Server talking! At your Services!");
                con.query(sql, function(ee, result, fields) {
                    if(err) throw err;
                    resolve(result)
                });
                
                con.end(function(err) {
                    console.log("Disconnected from MySQL server");
                });
                return(data);
            }
            // console.log(data)
            return(-1);
        })
    }); // define the Promise with any async code
  
    let result = await promise; // define that some output will be returned when the Promise is resolved
    return(result)
}

async function insertStudent(student) {
    var sql = `INSERT INTO students(student_first, student_last, hobby) 
               VALUES('${student.student_first}', '${student.student_last}', '${student.hobby}');`
    console.log(sql)    
    var con = db.createConnection(dbhost_ra1);
    let promise = new Promise((resolve, reject) => {
        con.connect(function (err) {
            let data;
            if(err) {
                console.log("Error Connecting");
            } else {
                console.log("Yeap, this is MySQL Server talking! At your Services!");
                con.query(sql, function(ee, result, fields) {
                    if(err) throw err;
                    resolve(result)
                });
                
                con.end(function(err) {
                    console.log("Disconnected from MySQL server");
                });
                return(data);
            }
            // console.log(data)
            return(-1);
        })
    }); // define the Promise with any async code
  
    let result = await promise; // define that some output will be returned when the Promise is resolved
    return(result)

}

// insertStudent(student) student = new Student()

module.exports = { getAllStudents, insertStudent }
