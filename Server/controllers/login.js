const users = require("../utils/users");

const login = (req,res)=>{

  const {email, password} = req.query;

  //const user = users.find(us => us.email ===email && us.password === password);
  // user? res.json({access: true}) : res.josn({aceess: false})

  users.forEach(user =>{
    if(user.email ===email && user.password === password){
      access = true;
    }
  })
  res.json({access})
};

module.exports = login;