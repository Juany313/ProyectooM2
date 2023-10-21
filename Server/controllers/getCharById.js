const axios = require('axios');

const getCharById = (res, id)=>{
axios.get(`https://rickandmortyapi.com/api/character/${id}?key={tuApiKey}`)
.then(({data})=>{
  const {name, gender, origin=origin.name, image, status} = data;
  
  const character = {name,id, gender, origin, image, status}

  res.writeHead(200, {'Content-Type': "Application/Json"})
  res.end(JSON.stringify(character))
})
.catch((reason)=>{

  res.writeHead(500, {'Content-Type': "text/plain"})
  res.end(reason.messaje)
})
};


module.exports = getCharById;