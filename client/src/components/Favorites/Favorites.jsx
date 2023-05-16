import Card from "../Card/Card";
import style from './Favorites.module.css'
import { useSelector, useDispatch } from "react-redux"
import { filterCards, orderCards  } from "../../redux/actions";

export const Favorites = () => {
  const characters = useSelector(state => state.myFavorites)
  const dispatch = useDispatch()

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value))
  }
  
  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value))

  }

  return (
    <div>
      <select onChange={handleOrder}>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>
      <select onChange={handleFilter}>
        <option value="Everyone">Todos</option>
        <option value="Male">Hombre</option>
        <option value="Female">Mujer</option>
        <option value="Genderless">Sin género</option>
        <option value="unknown">Desconocido</option>
      </select>
      <div className={style.container}>
        {
          characters.map((character) => 
            <Card
              key={character.id}
              id={character.id}
              name={character.name}
              status={character.status}
              species={character.species}
              gender={character.gender}
              origin={character.origin}
              image={character.image}
              onClose={character.onClose}
            />
            )
        }
      </div>
    </div>
    )
}

// TODO: Si revisas, esta aplicación tiene un pequeño bug que tendrás que resolver... cuando presionas el ❤️ de una de las Cards el personaje aparece en la vista de "Favoritos". Pero si luego eliminas el personaje precionando en la X, este aún permanece en esa vista. Busca la manera para que cuando elimines un personaje, también se elimine de "Favoritos".