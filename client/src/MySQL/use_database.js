var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "test",
});
//con.connect();
con.connect(function(err, result) {
if (err) throw err;
if(result) console.log("Connected!");
  con.query("USE pruebatecnicaTc", function (err, result) {
    if (err) throw err;
    console.log("Database changed to pruebatecnicaTc");
  });
});