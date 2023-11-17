/* express config */
const express = require("express");
const router = express.Router();

/* controllers */
const postUser= require("../controllers/postUser");
const {getCharById} = require("../controllers/getCharById");


// http://localhost:3001/rickandmorty/character/5 -->
//traer todos los personajes router.get ("character")

/* routes */

router.get("/character/:id", getCharById);
router.post("/login", postUser)



module.exports = router;

