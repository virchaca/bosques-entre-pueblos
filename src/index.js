const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');

// create and config server
const server = express();
server.use(cors());
server.use(express.json());

// init express aplication
const serverPort = 4001;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// conexion con la BD
async function getConnection() {
  const connection = await mysql.createConnection({
    host: 'host_de_tu_bd',
    user: 'user_de_tu_bd',
    password: 'tu_contraseña',
    database: 'tu_bd',
  });
  await connection.connect();
  console.log(
    `Conexión establecida con la base de datos (identificador=${connection.threadId})`
  );

  return connection;
}
// creamos  nuestros endpoints
//get, post, put, delete
