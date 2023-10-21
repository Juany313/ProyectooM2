const http= require("http");
const getCharById = require("../controllers/getCharById")



http.createServer((req,res)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  const {url} = req;
  const arrUrl = url.split("/");
  const idPersonaje = Number(arrUrl.reverse()[0]);


  if(url.includes("/rickandmorty/character")){
  
    getCharById(res,idPersonaje)
    
    return;
  }

  res.writeHead(400);
  res.end();
}).listen(3001, "localhost");