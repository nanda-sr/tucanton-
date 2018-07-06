var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "test",
  database: "pruebatecnicaTc",
});
//con.connect();
con.connect(function(err, result) {
if (err) throw err;
if(result) console.log("Connected!");
var sql = "INSERT INTO catalogo_equipos(nombre) VALUES('Equipo 1'), ('Equipo 2'), ('Equipo 3')";
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("3 records inserted");
});
var sql = "INSERT INTO catalogo_usuarios(nombre, equipo_id) VALUES ('Juan', 3), ('Ericka', 3), ('Manuel', 2), ('Carolina', 1)";
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("4 records inserted");
});
var sql = "INSERT INTO catalogo_clientes(email, usuario_id) VALUES ('juan@correo.com', 1), ('ericka@correo.com', 2),('manuel@correo.com', 3), ('carolina@correo.com', 4)";
con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("4 records inserted");
});
});