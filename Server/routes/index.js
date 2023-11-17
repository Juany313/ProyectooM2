/* express config */
const express = require("express");
const router = express.Router();

/* controllers */
const login = require("../controllers/login")
const postUser= require("../controllers/postUser");
const postFav= require("../controllers/postFav");
const {getCharById} = require("../controllers/getCharById");


// http://localhost:3001/rickandmorty/character/5 -->
//traer todos los personajes router.get ("character")

/* routes */

router.get("/character/:id", getCharById);
router.get("/login", login);
router.post("/login", postUser);
router.post("/fav", postFav);



module.exports = router;

