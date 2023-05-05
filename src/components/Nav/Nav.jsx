import { NavLink } from 'react-router-dom';

import SearchBar from '../SearchBar/SearchBar'
import style from "./Nav.module.css";

const Nav = ({onSearch, onLogout}) => {

  return (
    <div className={style.container}>
      <div>
        <NavLink to={'/home'} className={({isActive}) => isActive ? style.active: style.inactive}>
          Inicio
        </NavLink>
        <NavLink to={'/about'} className={({isActive}) => isActive ? style.active: style.inactive}>
          Acerca de mí
        </NavLink>
      </div>
      <SearchBar onSearch={onSearch} />
      <button onClick={onLogout}>Logout</button>
    </div>
  )
}

export default Nav;