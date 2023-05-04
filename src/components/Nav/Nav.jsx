import { NavLink } from 'react-router-dom';

import SearchBar from '../SearchBar/SearchBar'
import style from "./Nav.module.css";

const Nav = (props) => {

  return (
    <div className={style.container}>
      <div>
        <NavLink to={'/'} className={({isActive}) => isActive ? style.active: style.inactive}>
          Inicio
        </NavLink>
        <NavLink to={'/about'} className={({isActive}) => isActive ? style.active: style.inactive}>
          Acerca de mí
        </NavLink>
      </div>
      <SearchBar onSearch={props.onSearch} />
    </div>
  )
}

export default Nav;