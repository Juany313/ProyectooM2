import SearchBar from "../SearchBar/SearchBar";
import {Link} from "react-router-dom"
/* styles */
import style from './Nav.module.css';

/* se pueden hacer la mejora de deshabilitar el boton si hay errors, mirar a partir de 1:10 clase de Sabri */
export default function Nav(props) {
  return (
    <div className={style.nav}>
      <SearchBar onSearch={props.onSearch}/>
    <div className={style.buttons}>
      <Link className={style.but} to="/about">
      <button>About</button>
      </Link>
      <Link to="/home">
      <button>Home</button>
      </Link>
      <Link to="/favorites">
      <button>Favorites</button>
      </Link>
    </div>
      
    </div>
  );
}