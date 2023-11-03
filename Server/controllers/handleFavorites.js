
let myFavorites = [];

const postFav = (req,res)=>{
  const character = req.body;

  myFavorites.push(character);
  console.log("##### character");
  console.log(character);
  res.json(myFavorites);
}

const deleteFav = (req,res)=>{
  const{id} = req.params;
  console.log("####aca id");
  console.log(typeof id)
  console.log("####aca myFavorites");
  console.log(myFavorites);
  myFavorites= myFavorites.filter((fav) => fav.id !== Number(id));
  res.status(200).json(myFavorites);
};

module.exports = {
  postFav,
  deleteFav
}