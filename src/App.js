import './App.css';
import {Routes, Route} from "react-router-dom"
import Nav from './components/Nav/Nav.jsx';
import Cards from './components/Cards/Cards.jsx';
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import { useState } from "react";
import axios from "axios"; // Importa axios

function App() {
  const [characters, setCharacters] = useState([]);

  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
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
        <Nav onSearch={onSearch} />
        <Routes >
            <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/detail/:id" element={<Detail/>}/>
        </Routes>
      </div>
   );
}

export default App;
