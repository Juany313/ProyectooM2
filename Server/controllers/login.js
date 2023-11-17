const{ User } = require("../src/DB_connection");

const login = async (req,res)=>{
    const {email, password} = req.query;
   
    if(!email || !password){
        return res.status(400).json("Faltan datos");
    }
    try {
        const [user,created]= await User.findOrCreate({
            where: {email},
            defaults: {
                password,
            }
        });

        if(!created){
           return  res.status(409).json({ error: "El email ya esta registrado"})
        }

        return res.status(200).json(user)

    } catch (error) {
        res.status(500).json({error: error.message})
    }
};

module.exports= login;