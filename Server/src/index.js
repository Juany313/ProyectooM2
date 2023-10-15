const http= require("http");
const fs= require("fs");
const data = require("../utils/data");


//data.forEach((personaje)=>console.log(personaje.id))

http.createServer((req,res)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  const {url} = req;
  console.log("aca url", url)
  const arrUrl = url.split("/");
  const idPersonaje = Number(arrUrl.reverse()[0]);
  console.log(idPersonaje)

  if(url === "/") {
    res.writeHead(200, {"Content-Type": "text/plain"});
    return res.end("Holis!!");
  }

  if(url.includes("/rickandmorty/character")){
  
    data.forEach((personaje)=>{
      if(idPersonaje === personaje.id){
        res.writeHead(200, {"Content-Type": "application/json"});
        return res.end(JSON.stringify(personaje));
      }
    })
    return;
  }

  res.writeHead(400);
  res.end();
}).listen(3001, "localhost");