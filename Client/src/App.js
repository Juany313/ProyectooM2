/* style */
import './App.css';

/* components to render */
import Form from './components/Form/Form.jsx';
import Nav from './components/Nav/Nav.jsx';
import Cards from './components/Cards/Cards.jsx';
import About from "./views/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Favorites from './components/Favorites/Favorites';

/* hooks */
import {Routes, Route, useLocation, useNavigate} from "react-router-dom";
import ReactRedux from "./components/ReactRedux/ReactRedux.jsx"
import { useEffect, useState } from "react";

/* dependencies */
import axios from "axios"; // Importa axios

/* credentials */
const EMAIL = "juanjaviergeringer@gmail.com";
const PASSWORD = "asd1234";

function App() {
  const {pathname} = useLocation();
  const navigate = useNavigate();

  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);


  /*  function login(userData) {
    if(userData.email === EMAIL && userData.password === PASSWORD){
      setAccess(true);
      navigate("/home");
    }
  }; */ 
// !PROMESAS
/* function login(userData) {
    const { email, password } = userData;
    const URL = 'http://localhost:3001/rickandmorty/login/';
    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
       const { access } = data;
       setAccess(data);
       access && navigate('/home');
    });
 } */

// ! ASINC/AWAIT
 async function login(userData) {
    const { email, password } = userData;
    const URL = 'http://localhost:3001/rickandmorty/login/';
    const {data} = await axios(URL + `?email=${email}&password=${password}`)
    setAccess(data.access);
    access && navigate('/home');
 }


/*   useEffect(()=>{
    !access && navigate("/");
  }, [access]) */

// !PROMESAS
 /*  function onSearch(id) {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
       if (data.name) {
     
          setCharacters((oldChars) => [...oldChars, data]);

       } else {
          window.alert('¡No hay personajes con este ID!');
       }
    });
  } */

  async function onSearch(id) {
    try {
      const {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
      if(data.name){
        setCharacters((oldChars) => [...oldChars, data])
      }

    } catch (error) {
      window.alert('Datos incorrectos');
    }
  }

  const onClose = (id) => {
    setCharacters(
      characters.filter((char) => {
        let idd = char.id;
        console.log(`este es el id que llega: ${id}`);
        console.log(`este es el del personaje: ${idd}`);
        return char.id !== Number(id);
      })
    )
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



export default App;





