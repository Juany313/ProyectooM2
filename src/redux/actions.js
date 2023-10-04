export const addFav = (personaje)=>{
  return {
    type: "ADD_FAV",
    payload: personaje
  }
}
export const removeFav = (id)=>{
  return {
    type: "REMOVE_FAV",
    payload: id
  }
};

/* Construye dos actions-creators:

addFav: esta función recibe un personaje por parámetro. Deberás retornar una action con el type igual a "ADD_FAV", y el payload igual a ese personaje.

removeFav: esta función recibe un id por parámetro. Deberás retornar una action con el type igual a "REMOVE_FAV", y el payload igual a ese id.

Exporta ambas funciones.

[NOTA]: no olvides que el nombre que asignes en la propiedad "TYPE" de tu acción, debe coincidir exactamente con el nombre de los casos que hayas asignado en tu reducer. */