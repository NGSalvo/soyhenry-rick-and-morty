import {useEffect, useState} from 'react';
import style from './SearchBar.module.css';

export default function SearchBar({onSearch}) {
   const [id, setId] = useState('');

   const handleOnChange = (e) => {
      const {value} = e.target;
      setId(value);
   }

   const generateRandomId = () => {
      const maxIDs = 826
      return Math.floor(Math.random() * maxIDs)
   }


   return (
      <div className={style.container}>
         <input className={style.search} type='search' value={id} onChange={handleOnChange}/>
         <button className={style.btn} onClick={() => onSearch(id)}>Agregar</button>
         <button className={style.btn} onClick={() => onSearch(generateRandomId())}>Agregar random</button>
      </div>
   );
}
