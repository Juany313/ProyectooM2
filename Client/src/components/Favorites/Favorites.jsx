import { connect } from "react-redux";
import Card from "../Card/Card";
import style from "./Favorites.module.css"


const Favorites = (props)=> {

  const{myFavorites} = props;

  return (
    <div className={style.cards}>
      {myFavorites.map((personaje)=>{
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

const mapStateToProps = (state)=> {
  return {
    myFavorites: state.myFavorites,
  }
};

export default connect(mapStateToProps,null)(Favorites);