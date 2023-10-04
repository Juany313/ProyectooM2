import React, { useState, useEffect } from "react";
import style from './Card.module.css';
import {Link} from "react-router-dom";
import {addFav, removeFav} from "../../redux/actions";
import { connect } from 'react-redux';

function Card(props) {

  const {name, status, species,gender, origin, image, onClose,id, addFav, removeFav, myFavorites} = props;

  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    myFavorites.forEach((fav) => {
       if (fav.id === props.id) {
          setIsFav(true);
       }
    });
 }, [myFavorites]);

  const handleFavorite = ()=> {
    isFav? removeFav(id) : addFav(props);
    setIsFav(!isFav)
  }

  return (
    
      <div className={style.card}>
        {
          isFav ? (
              <button onClick={handleFavorite}>❤️</button>
          ) : (
              <button onClick={handleFavorite}>🤍</button>
          )
        }
         <button onClick={() => onClose(id)}>X</button>
         <Link to={`/detail/${id}`}>
         <h4>name: {name}.</h4>
         </Link>
         <h2>{id}</h2>
         <h4>status: {status}.</h4>
         <h4>species: {species}.</h4>
         <h4>gender: {gender}.</h4>
         <h4>origin:{origin}</h4>
         <img src={image} alt='' />
      </div>
    
   );
};

const mapDispatchToProps = (dispatch) => {
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

export default connect(mapStateToProps,mapDispatchToProps)(Card);

//si no necesito traer nada, el primer parámetro del conect es null.