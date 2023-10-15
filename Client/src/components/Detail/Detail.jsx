import React from "react";
import {useParams} from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from 'react';



export default function Detail(){
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacter(data);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
    return setCharacter({});
 }, [id]);

  return (
    <div>
      <h1>Detail</h1>
      <div>
        {character.name && <p>Nombre: {character.name}</p>}
        {character.status && <p>Estado: {character.status}</p>}
        {character.species && <p>Especie: {character.species}</p>}
        {character.gender && <p>Género: {character.gender}</p>}
        {character.origin && character.origin.name && (
          <p>Origen: {character.origin.name}</p>
        )}
        {character.image && (
          <img src={character.image} alt={`Imagen de ${character.name}`} />
        )}
      </div>
    </div>
  )
}