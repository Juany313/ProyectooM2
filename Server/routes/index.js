//const router = require("express").Router();
const express = require("express");
const router = express.Router();

const login = require("../controllers/login");
const getCharById = require("../controllers/getCharById");
const {deleteFav, postFav} = require("../controllers/handleFavorites");

// http://localhost:3001/rickandmorty/character/5 -->
//traer todos los presonajes router.get ("character")
router.get("/character/:id", getCharById)
router.get("/login", login);
router.post("/fav", postFav);
router.get("/fav/:id", deleteFav);

module.exports = router;

