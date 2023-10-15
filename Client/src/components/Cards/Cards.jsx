import Card from '../Card/Card';
import style from './Cards.module.css';


export default function Cards(props) {
   return (
   <div className={style.cards}>
    
    {props.characters.map((personaje)=>{
      return <Card
      id={personaje.id}
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
   </div>
   )
};

