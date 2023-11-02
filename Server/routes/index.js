/* express config */
const express = require("express");
const router = express.Router();

/* controllers */
const login = require("../controllers/login");
const {getCharById} = require("../controllers/getCharById");
const {deleteFav, postFav} = require("../controllers/handleFavorites");

// http://localhost:3001/rickandmorty/character/5 -->
//traer todos los personajes router.get ("character")

/* routes */
router.get("/character", (req,res)=>{
  res.send("acaaa")
})
router.get("/character/:id", getCharById)
router.get("/login", login);
router.post("/fav", postFav);
router.get("/fav/:id", deleteFav);

module.exports = router;

