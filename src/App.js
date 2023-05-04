import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import { useState } from 'react';
import axios from 'axios';

function App() {
   
   const [characters, setCharacters] = useState([])
 
   const searchById = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
         setCharacters((prev) => [...prev, data]);
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
      });
   
   }
   const onClose = (id) => { 
      const filteredCharacters = characters.filter(character => character.id !== +id);
      setCharacters(() => [...filteredCharacters])
   }


   return (
      <div className='App'>
         <Nav onSearch={searchById}></Nav>
         <Cards characters={characters} onClose={onClose}/>
      </div>
   );
}

export default App;
