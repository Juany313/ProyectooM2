const axios = require('axios');


const getCharById = (req, res)=> {
  const {id} = req.params;
  const URL = `https://rickandmortyapi.com/api/character/${id}`;
   
  axios.get(URL)
  .then(({data})=>{
    console.log(data.name)
    console.log(data.id)
    if(data){
      const {name, gender, origin, image, status, id} = data;
      const character = {name, gender, origin, image, status, id }

        res.status(201).json(character)
    } else {
        res.status(404).json({mesagge: "Not Found"})
    }
  })
  .catch((error)=>{
     res.status(500).json({mesagge: error})
  })
 
}
module.exports = {getCharById};