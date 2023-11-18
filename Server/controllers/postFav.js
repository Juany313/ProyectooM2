
const{ Favorite } = require("../src/DB_connection");

const postFav = async (req,res)=>{

    const {id,name,image,} = req.body;

    try {
        if(!id || !name || !image ){
            return res.status(401).json({error: "Faltan datos"})
        }

        const[charFav, created] = await Favorite.findOrCreate({
            where: {id,name,image}
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