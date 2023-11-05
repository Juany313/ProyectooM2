import { useSelector, useDispatch } from "react-redux";
import Card from "../Card/Card";
import style from "./Favorites.module.css";
import { orderCards, filterCards} from "../../redux/actions"
import { useState } from "react";


const Favorites = ()=> {
  const {myFavorites} = useSelector((state)=>state);
  /* const [aux, setAux] = useState(false);
  //const{myFavorites} = props;
  const dispatch = useDispatch()

  const handleOrder= (e)=>{
    dispatch(
      orderCards(e.target.value),
      setAux(!aux)
    )
  }
  const handleFilter= (e)=>{
    dispatch(
      filterCards(e.target.value)
    )
  } */

  return (
    <div className={style.cards}>

          {myFavorites?.map((favorite) => {
            return(
              <Card 
                key= {favorite.id}
                id= {favorite.id}
                name= {favorite.name}
                image= {favorite.image}

              />

            )
          })}
    </div>
  )
};

export default Favorites;

/*         <div>
          <select>
            <option 
              value="A" 
              onChange={handleOrder}
              >Ascendente
            </option>
            <option 
              value="D"
              onChange={handleOrder}
              >Descendente
            </option>
          </select>
          <select onChange={handleFilter}>
            <option 
              value="Male"
              >Male
            </option>
            <option 
              value="Female"
              >Female
            </option>
            <option 
              value="Genderless"
              >Genderless
            </option>
            <option 
              value="unknown"
              >unknown
            </option>
          </select>
        </div> */

