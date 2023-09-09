import './App.css';
import Nav from './components/Nav/Nav.jsx';
import Cards from './components/Cards/Cards.jsx';
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
         <Cards characters={characters} onClose={onClose}/>
         
      </div>
   );
}

export default App;
