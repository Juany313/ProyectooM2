const axios = require('axios');

const URL = `https://rickandmortyapi.com/api/caracter/`;

const getCharById = (req, res)=> {
  const {id} = req.params;

  axios(`${URL}${id}`)
  .then((data)=>{
    if(data){
      const {name, gender, origin = origin.name, image, status} = data;
      const character = {name, gender, species, origin, id, image, status }

      res.status(201).json(character)
    } else {
      res.status(404).json({mesagge: "Not Found"})
    }
  })
  .catch((error)=>{
    res.status(500).json({mesagge: error})
  })
}

module.exports = getCharById;