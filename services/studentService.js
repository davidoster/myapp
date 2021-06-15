var db = require("mysql2")
var dbhost_ra1 = {
    host: "ra1.anystream.eu",
    port: "5420",
    user: "cb12ptjs",
    password: "cb12ptjs",
    database: "cb12ptjs"
};
var sql = "SELECT * FROM `cb12ptjs`.`students`;";

var con = db.createConnection(dbhost_ra1);

async function myDBAccess() {
    let finalresult;
    var obj1;
    obj1 = con.connect(function (err) {
        let data;
        if(err) {
            console.log("Error Connecting");
        } else {
            console.log("Yeap, this is MySQL Server talking! At your Services!");
            con.query(sql, function(ee, result, fields) {
                if(err) throw err;
                finalresult = Object.assign({}, result)
                console.log(`From inside:`)
                console.log(finalresult)
            });
            
            con.end(function(err) {
                console.log(finalresult)
                console.log("Disconnected from MySQL server");
            });
            return(data);
        }
        // console.log(data)
        return(-1);
    });
    return(finalresult);
}

let data = myDBAccess()
console.log("From outside: ")
myDBAccess().then(console.log)
module.exports = { data }