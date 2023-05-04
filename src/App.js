import './App.css';
import { useState } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import axios from 'axios';

import Home from './components/Home/Home'
import Nav from './components/Nav/Nav';
import About from './components/About/About'
import CardDetail from './components/CardDetail/CardDetail';
import Error from "./components/Error/Error";

import './assets/fonts/get_schwifty.ttf'

function App() {
   const [characters, setCharacters] = useState([])
   const navigate = useNavigate();
 
   const searchById = async(id) => {
      try {
         const { data } = await axios(`https://rickandmortyapi.com/api/character/${id}`);
         if (data.name) {
            setCharacters((prev) => [...prev, data]);
         }
      } catch (error) {
         if (error.response.status === 404) return navigate('not-found')
         console.log(error)
      }
   }

   const onClose = (id) => { 
      const filteredCharacters = characters.filter(character => character.id !== +id);
      setCharacters(() => [...filteredCharacters])
   }

   return (
      <div className='App'>
         <Nav onSearch={searchById}></Nav>
         <Routes>
            <Route path='/' element={<Home characters={characters} onClose={onClose}/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<CardDetail/>}/>
            <Route path='*' element={<Error/>}/>
         </Routes>
      </div>
   );
}

export default App;
