import SearchBar from '../SearchBar/SearchBar'
import style from "./Nav.module.css";

const Nav = (props) => {


  return (
    <div className={style.container}>
      <SearchBar onSearch={props.onSearch} />
    </div>
  )
}

export default Nav;