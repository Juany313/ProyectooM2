import Card from '../Card/Card';
import style from './Cards.module.css';


export default function Cards(props) {
   return (
   <div className={style.cards}>
    
    {props.characters.map((personaje)=>{
      return <Card
      characters={props.characters}
      id={personaje.id}
       onClose={props.onClose}
       name={personaje.name}
       image={personaje.image}
       key={personaje.id}
       />
       })}
   </div>
   )
};

