import style from './SearchBar.module.css';

export default function SearchBar({onSearch}) {
   return (
      <div className={style.container}>
         <input className={style.search} type='search' />
         <button className={style.btn} onClick={onSearch}>Agregar</button>
      </div>
   );
}
