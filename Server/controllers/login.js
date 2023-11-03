const users = require("../utils/users");

const login = (req,res)=>{

  const {email, password} = req.query;

  const user = users.find(us => us.email ===email && us.password === password);
   user? res.json({access: true}) : res.json({access: false})

  res.json({access})
};

module.exports = login;