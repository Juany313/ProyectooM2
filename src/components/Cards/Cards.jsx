import Card from '../Card/Card';
import style from './Cards.module.css'

export default function Cards(props) {
  console.log(props.characters, "aca")
   return <div className={style.cards}>
    {props.characters.map((personaje)=>{
      console.log(personaje, 'personajeeeeeee')
      return <Card
      idDelete = {personaje.id}
      characters={props.characters}
       onClose={props.onClose}
       name={personaje.name}
       status={personaje.status}
       species={personaje.species}
       gender={personaje.gender}
       origin={personaje.origin.name}
       image={personaje.image}
       key={personaje.id}
       />
    })}
   </div>;
}
/* <h2>name: {props.nombre}.</h2>
         <h2>status: {props.status}.</h2>
         <h2>species: {props.especie}.</h2>
         <h2>gender: {props.género}.</h2>
         <h2>origin:{props.origin}</h2>
         <img src={props.image} alt='' /> */