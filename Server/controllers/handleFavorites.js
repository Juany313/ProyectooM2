
let myFavorites = [];

const postFav = (req,res)=>{
  const charaster = req.body;
  myFavorites.push(charaster);
  res.json(myFavorites);
}

const deleteFav = (req,res)=>{
 /*  const{id} = req.params;

  myFavorites= myFavorites.filter(fav => fav.id !== Number(id));
  res.json(myFavorites); */
};

module.exports = {
  postFav,
  deleteFav
}