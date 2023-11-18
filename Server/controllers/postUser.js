const{ User } = require("../src/DB_connection");

const postUser = async (req, res)=>{
    const {email, password} = req.body
    console.log(email, password, "###############acaaaa");
    try {
        if(!email || ! password){ return res.status(400).send({message: "faltan datos"});}
        const [user, created] = await User.findOrCreate({
            where: {email},
            defaults: {
                password
            }
        });

    if (created) {
        return res.status(200).json(user)
    } else {
        return res.status(409).json({error: "El email ya està registrado"})
    }
        
    } catch (error) {
        res.status(500).json({error: error.message})
    }
};

module.exports = postUser;