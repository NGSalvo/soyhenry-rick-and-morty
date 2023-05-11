import { useSelector } from "react-redux"
import Card from "../Card/Card";
import style from './Favorites.module.css'

export const Favorites = () => {
  const characters = useSelector(state => state.myFavorites)
  return (
    <div className={style.container}>{
      characters.map((character) => 
        <Card
          key={character.id}
          id={character.id}
          name={character.name}
          status={character.status}
          species={character.species}
          gender={character.gender}
          origin={character.origin.name}
          image={character.image}
          onClose={character.onClose}
        />
        )
      }
    </div>)
}