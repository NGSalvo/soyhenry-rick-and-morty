import { useParams } from 'react-router-dom';
import style from './CardDetail.module.css'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { rickAndMortyURL } from "../../utils/const";

// const initialState = {
//   id: '',
//   name: '',
//   status: '',
//   species: '',
//   gender: '',
//   origin: ''
// }

const CardDetail = () => {
  const {id} = useParams()
  const [character, setCharacter] = useState({})

  const fetchCharacter = async() => {
    const {data} = await axios(`${rickAndMortyURL}/${id}`);
    setCharacter(data)
  }
  
  useEffect(() => {
    fetchCharacter()
    return setCharacter({}); // Al desmontarse el componente, se reinicializa el personaje
  }, [id]);

  const renderCharacter = () => {
    if (!character.id) return <div>Loading...</div>

    return (
      <div className={style.card}>
        <div>
          <img src={character.image} alt={character.name} />
        </div>
         <div className={style.info}>
            <h2 className={style.name}>{character.name}</h2>
            <h5>Estado: {character.status === 'Alive' ? '💓' : '💀'}</h5>
            <h5>Especie: {character.species}</h5>
            <h5>Género: {character.gender}</h5>
            <h5>Origen: {character.origin.name}</h5>
         </div>
      </div>
    )
  }

  return (
       <div className={style.container}>
        {renderCharacter()} 
      </div>
  )
}

export default CardDetail;