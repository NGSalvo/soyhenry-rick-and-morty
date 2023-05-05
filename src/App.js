import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import axios from 'axios';

import Home from './components/Home/Home'
import Nav from './components/Nav/Nav';
import About from './components/About/About'
import CardDetail from './components/CardDetail/CardDetail';
import Error from "./components/Error/Error";
import { Login } from './components/Login/Login';

import './assets/fonts/get_schwifty.ttf'

function App() {
   const [characters, setCharacters] = useState([])
   const [access, setAccess] = useState(false)
   const credentials = {email: 'nicosalvo@gmail.com', password: '123'}
   const navigate = useNavigate();
   const { pathname } = useLocation();

   const login = ({email, password}) => {
      if (credentials.email === email && credentials.password === password) {
         setAccess(true)
      }

      if (access) {
         navigate('/home')
      }
   }

   const logout = () => {
      setAccess(false)
   }
 
   const searchById = async(id) => {
      try {
         const { data } = await axios(`https://rickandmortyapi.com/api/character/${id}`);
         if (data.name) {
            setCharacters((prev) => [...prev, data]);
         }
      } catch (error) {
         if (error.response.status === 404) return navigate('not-found')
      }
   }

   const onClose = (id) => { 
      const filteredCharacters = characters.filter(character => character.id !== +id);
      setCharacters(() => [...filteredCharacters])
   }

   useEffect(() => {
      !access && navigate('/')
   }, [access])

   return (
      <div className='App'>
         { pathname !== '/' && <Nav onSearch={searchById} onLogout={logout}></Nav>}
         <Routes>
            <Route path='/' element={<Login login={login}/>}/>
            <Route path='/home' element={<Home characters={characters} onClose={onClose}/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<CardDetail/>}/>
            <Route path='*' element={<Error/>}/>
         </Routes>
      </div>
   );
}

export default App;
