import style from './Card.module.css'

export default function Card({name, status, species,gender, origin, image, onClose,idDelete}) {
   return (
      <div className={style.card}>
         <button onClick={() => onClose(idDelete)}>X</button>
         <h4>name: {name}.</h4>
         <h4>status: {status}.</h4>
         <h4>species: {species}.</h4>
         <h4>gender: {gender}.</h4>
         <h4>origin:{origin}</h4>
         <img src={image} alt='' />
      </div>
   );
}


