const { all } = require("axios");
const{ Favorite } = require("../src/DB_connection");

const postFav = async (req,res)=>{

    const {id,name,origin,status,image,species,gender} = req.body;

    try {
        if(!id || !name || !origin || !status || !image || !species || !gender){
            return res.status(401).json({error: "Faltan datos"})
        }

        const[charFav, created] = await Favorite.findOrCreate({
            where: {id,name,origin,status,image,species,gender}
        })

        if(!created){
            return res.status(409).json({error: "El personaje ya se encuentra en favoritos"})
        };
        const allFavs = await Favorite.findAll();

        return res.status(200).json(allFavs);

    } catch (error) {
        res.status(500).json({error: error.message})
    }
};

module.exports = postFav;