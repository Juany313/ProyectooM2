import './App.css';
import {Routes, Route, useLocation, useNavigate} from "react-router-dom";
import Form from './components/Form/Form.jsx';
import Nav from './components/Nav/Nav.jsx';
import Cards from './components/Cards/Cards.jsx';
import About from "./views/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import ReactRedux from "./components/ReactRedux/ReactRedux.jsx"
import { useEffect, useState } from "react";
import axios from "axios"; // Importa axios
import Favorites from './components/Favorites/Favorites';

function App() {
  const {pathname} = useLocation();
  const navigate = useNavigate();

  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const EMAIL = "juanjaviergeringer@gmail.com";
  const PASSWORD = "asd1234";

/*   function login(userData) {
    if(userData.email === EMAIL && userData.password === PASSWORD){
      setAccess(true);
      navigate("/home");
    }
  }; */

  function login(userData) {
    const { email, password } = userData;
    const URL = 'http://localhost:3001/rickandmorty/login/';
    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
       const { access } = data;
       setAccess(data);
       access && navigate('/home');
    });
 }

  useEffect(()=>{
    !access && navigate("/");
  }, [access])


  function onSearch(id) {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
       } else {
          window.alert('¡No hay personajes con este ID!');
       }
    });
  }
  const onClose = (idToDelete) => {
    const updatedCharacters = characters.filter((character) => character.id !== parseInt(idToDelete));
    setCharacters(updatedCharacters);
  };
 
   return (
      <div className='App'>
        {pathname!== "/" && <Nav onSearch={onSearch} />}
        {/* <Nav onSearch={onSearch} /> */}
        <Routes >
            <Route path="/" element={<Form login={login}/>}/>
            {/* <Route path="/reactRedux" element={<ReactRedux/>}/> */}
            <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/favorites" element={<Favorites/>}/>
            <Route path="/detail/:id" element={<Detail/>}/>
        </Routes>
      </div>
   );
}

/* 
29 MINUTOS CLASE ROUTINGGGGGGGGGGGGGGGGGGGGGGGG
*/

export default App;





