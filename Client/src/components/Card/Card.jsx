/* style */
import style from './Card.module.css';

/* hooks */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link, useLocation} from "react-router-dom";

/* actions */
import {addFav, removeFav} from "../../redux/actions";

function Card({id,name,image, onClose}) {
  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);
  const {pathname} = useLocation();
  const [isFav, setIsFav] = useState(false);
  
  const handleFavorite = ()=> {
    if(isFav){
      setIsFav(false)
      dispatch(removeFav(id))
    } else {
      setIsFav(true)
      dispatch(addFav({id,name,image,  onClose}))
    }
    /* isFav? removeFav(id) : addFav(props);
    setIsFav(!isFav) */
  }
  useEffect(() => {
    myFavorites.forEach((fav) => {
       if (fav.id === id) {
          setIsFav(true);
       }
    });
 }, [myFavorites]);


  return (
    
      <div className={style.container}>
        <div className={style.buttonContainer}>
        {
          isFav ? (
              <button className={style.buttonFav} onClick={handleFavorite}>❤️</button>
          ) : (
              <button className={style.buttonFav} onClick={handleFavorite}>🖤</button>
          )
        }
        {
          pathname !== '/favorites' ? 
          <button className={style.button} onClick={() => onClose(id)}>X</button> 
          : ''
        }
        </div>

        <div className={style.imageContainer}>
         <img src={image} alt='' />
         <Link  to={`/detail/${id}`}>
         <h2 className={style.name} >{name}</h2>
         </Link>
        </div>

      </div>
    
   );
};





export default Card;

/* const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (personaje)=> {
      dispatch(addFav(personaje))
    },
    removeFav: (id)=> {
      dispatch(removeFav(id))
    },
  };
};

const mapStateToProps = (state)=> {
  return {
    myFavorites: state.myFavorites,
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(Card); */

//si no necesito traer nada, el primer parámetro del conect es null.

