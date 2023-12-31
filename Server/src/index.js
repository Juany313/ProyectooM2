/* server config */
const express = require("express");
const { database } = require("./DB_connection")
const server = express();
const PORT = 3001;

/* routes */
const router = require("../routes/index")
//libreria Dotenv -> sirve para guardar nuestras variables de entorno con info sencible
//.env
const morgan = require("morgan");

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
     'Access-Control-Allow-Headers',
     'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header(
     'Access-Control-Allow-Methods',
     'GET, POST, OPTIONS, PUT, DELETE'
  );
  next();
});

server.use(express.json());
server.use("/rickandmorty", router);

database.sync({
   /* force: true */
}).then(()=>{
   server.listen(PORT, () => {
      console.log('Server raised in port: ' + PORT);
   });
}).catch((error)=>console.log(error));