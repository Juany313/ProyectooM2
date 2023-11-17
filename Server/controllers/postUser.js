const{ User } = require("../src/DB_connection");

const postUser = async (req, res)=>{
    const {email, password} = req.body
    console.log(email, password, "###############acaaaa");
    try {
        if(!email || ! password){ return res.status(400).send({message: "faltan datos"});}
        const [user, created] = await User.findOrCreate({
            where: {
                email: email,
               
            }
        });

    if (created) {
        console.log("User created:", user);
        return res.send("Usuario creado correctamente");
    } else {
        console.log("User already exists:", user);
        return res.send("El usuario ya existe");
    }
        
    } catch (error) {
        res.send(error.message)
    }
};

module.exports = postUser;