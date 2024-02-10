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

// conexion con la BD ======> pruebo la conexion con npm start
async function getConnection() {
  const connection = await mysql.createConnection({
    host: 'sql.freedb.tech',  //Localhost
    user: 'freedb_adminForests',  //root
    password: 'PPB83aa?!WMJaV8',  //Mybootcamp@23
    database: 'freedb_forests',  //forests
  });
  await connection.connect();
  console.log(
    `Conexión establecida con la base de datos (identificador=${connection.threadId})`
  );

  return connection;
}
// creamos  nuestros endpoints
//get, post, put, delete

//LIST ALL PLANTS FROM MY DB - GET
server.get("/plants", async (req, res) => {
  let query = "SELECT * FROM plants";
  const conn = await getConnection();
  
    const [results] = await conn.query(query);
    const numOfElements = results.length;
    conn.end();
    res.json({
      count: numOfElements,
      results: results,
    });    
});

//GET PLANTS BY forest_type - (GET /plants/:forest_type).
server.get("/plants/:forest_type", async (req, res) => {
  const forestType = req.params.forest_type; //get id through url params
  let query = "SELECT * FROM plants WHERE forest_type = ?";
  
    const conn = await getConnection();
    const [results] = await conn.query(query, [forestType]);
    const numOfElements = results.length;
    // const numOfElements = results.length;
    conn.end(); 

    res.json({
      count: numOfElements,
      results: results,
    });
});


//GET PLANTS BY idPlants - (GET /plants/:idPlants). ===> no funciona
server.get("/plants/id/:idPlants", async (req, res) => {
  const plantsID = req.params.idPlants; //get id through url params
  let query = "SELECT * FROM plants WHERE idPlants = ?"; 

    const conn = await getConnection();
    const [results] = await conn.query(query, [plantsID]);
    conn.end(); 

    res.json(results);
});

console.log('hello plant');






//SERVIDOR DE ESTATICOS PARA LLAMAR AL FRONTEND - WEB

const staticServerPath = "./web/dist";
server.use(express.static(staticServerPath));

