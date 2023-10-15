import SearchBar from "../SearchBar/SearchBar";
import {Link} from "react-router-dom"

/* se pueden hacer la mejora de deshabilitar el boton si hay errors, mirar a partir de 1:10 clase de Sabri */
export default function Nav(props) {
  return (
     <div>
      <SearchBar onSearch={props.onSearch}/>
      <Link to="/about">
      <button>About</button>
      </Link>
      <Link to="/home">
      <button>Home</button>
      </Link>
      <Link to="/favorites">
      <button>Favorites</button>
      </Link>
      
     </div>
  );
}