const{ Favorite } = require("../src/DB_connection");

const deleteFav = async (req, res)=>{

    const {id} = req.params;

    try {
        await Favorite.destroy({
            where: {id}
        })

        const charFavs = await Favorite.findAll();
        return res.status(200).json(charFavs)

    } catch (error) {
        res.status(500).json({error: error.message})
    }
};


module.exports= deleteFav;