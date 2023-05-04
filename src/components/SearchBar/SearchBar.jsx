import {useState} from 'react';
import style from './SearchBar.module.css';

export default function SearchBar({onSearch}) {
   const [id, setId] = useState('');

   const handleOnChange = (e) => {
      const {value} = e.target;
      setId(value);
   }

   return (
      <div>
         <input className={style.search} type='search' value={id} onChange={handleOnChange}/>
         <button className={style.btn} onClick={() => onSearch(id)}>Agregar</button>
      </div>
   );
}
