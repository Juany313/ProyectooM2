import axios from "axios";
import { ADD_FAV, REMOVE_FAV } from "./actions-types";

/* export const addFav = (personaje)=>{
  return {
    type: ADD_FAV,
    payload: personaje
  }
} */

// !  PROMESAS
/* export const addFav = (character) => {
   const endpoint = 'http://localhost:3001/rickandmorty/fav';
   return (dispatch) => {
      axios.post(endpoint, character).then(({ data }) => {
         return dispatch({
            type: ADD_FAV,
            payload: data,
         });
      });
   };
}; */

// ! ASYNC/AWAIT

export const addFav =  (character) => {
  const endpoint = 'http://localhost:3001/rickandmorty/fav';

  try {
    return async (dispatch)=>{
      const {data} = await axios.post(endpoint, character);

      return dispatch({
        type: ADD_FAV,
        payload: data,
    });
    }
  } catch (error) {
    console.log("hay un error")
  }
}


/* export const removeFav = (id)=>{
  return {
    type: REMOVE_FAV,
    payload: id
  }
}; */

// !  PROMESAS
/* export const removeFav = (id) => {
  const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
  return (dispatch) => {
     axios.delete(endpoint).then(({ data }) => {
        return dispatch({
           type: REMOVE_FAV,
           payload: data,
     });
     });
  };
}; */


export const removeFav = (id) => {
  const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
  
  try {
    return async (dispatch) =>{
      const {data} = await axios.delete(endpoint);

      return dispatch({
        type: REMOVE_FAV,
        payload: data
      })

};
  } catch (error) {
    console.log("Hay un error")
  }
};

export const filterCards = (gender)=>{
  return {
    type: "FILTER",
    payload: gender
  }
};
export const orderCards = (orden)=>{
  return {
    type: "ORDER",
    payload: orden
  }
};
/* Construye dos actions-creators:

addFav: esta función recibe un personaje por parámetro. Deberás retornar una action con el type igual a "ADD_FAV", y el payload igual a ese personaje.

removeFav: esta función recibe un id por parámetro. Deberás retornar una action con el type igual a "REMOVE_FAV", y el payload igual a ese id.

Exporta ambas funciones.

[NOTA]: no olvides que el nombre que asignes en la propiedad "TYPE" de tu acción, debe coincidir exactamente con el nombre de los casos que hayas asignado en tu reducer. */