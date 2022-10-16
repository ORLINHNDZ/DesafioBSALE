require("dotenv").config();
const mysql = require('mysql2');

// Creamos una pool de conexiones con un limite de 5.
const pool = mysql.createPool({
    connectionLimit: 5,
    queueLimit: 0,
    host: process.env.DBHOST,
    user: process.env.DBUSER,
    password: process.env.DBPW,
    database: process.env.DB,
});

//Utilzamos el metodo getConnection para obtener las conexiones.
pool.getConnection((err, connection) =>{
  if (err) throw err; {
        return console.log(`Conexion mediante ${connection.threadId} exitosa`);
      }
  });

module.exports = pool;