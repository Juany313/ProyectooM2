const axios = require('axios');

const getCharById = async (req,res)=>{
  const {id} = req.params;
  const URL = `https://rickandmortyapi.com/api/character/${id}`;
  try {
    
    const {data} = await axios.get(URL)

    if(data){
      const {name, gender, origin, image, status, id} = data;
      const character = {name, gender, origin, image, status, id }

        res.status(201).json(character)
    } else {
        res.status(404).json({mesagge: "Not Found"})
    }
    
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}


/* const getCharById = (req, res)=> {
  const {id} = req.params;
  const URL = `https://rickandmortyapi.com/api/character/${id}`;
   
  axios.get(URL)
  .then(({data})=>{
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
 
} */
module.exports = {getCharById};