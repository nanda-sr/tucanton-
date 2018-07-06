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
con.query("CREATE TABLE catalogo_equipos(id INT AUTO_INCREMENT PRIMARY KEY, nombre VARCHAR(40))", function (err, result) {
  if (err) throw err;
  console.log("Table 'equipos' created");
});
con.query("CREATE TABLE catalogo_usuarios(id INT AUTO_INCREMENT PRIMARY KEY, nombre VARCHAR(40), equipo_id INT, FOREIGN KEY (equipo_id) REFERENCES catalogo_equipos(id))", function (err, result) {
  if (err) throw err;
  console.log("Table 'usuarios' created");
});
con.query("CREATE TABLE catalogo_clientes(id INT AUTO_INCREMENT PRIMARY KEY, email VARCHAR(100), usuario_id INT, FOREIGN KEY (usuario_id) REFERENCES catalogo_usuarios(id))", function (err, result) {
  if (err) throw err;
  console.log("Table 'clientes' created");
});
});