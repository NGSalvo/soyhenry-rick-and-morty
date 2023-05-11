import style from './Card.module.css';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { addFav, removeFav } from "../../redux/actions";



const Card= ({id, name, status, species, gender, origin, image, onClose, myFavorites, addFav, removeFav}) => {
   const [isClicked, setIsClicked] = useState(false);
   const [isFav, setFav] = useState(false);

   const handleOnClick = (e) => {
      if (!isClicked) {

         setIsClicked(true);
         const cardRect = e.currentTarget.getBoundingClientRect();
         const cardX = cardRect.left + cardRect.width / 2;
         const cardY = cardRect.top + cardRect.height / 2;
         const screenWidth = window.innerWidth;
         const screenHeight = window.innerHeight;
         const translateX = screenWidth / 2 - cardX;
         const translateY = screenHeight / 2 - cardY;
         e.currentTarget.style.transform = `translate(${translateX}px, ${translateY}px)`;
      } else {
         setIsClicked(false);
         e.currentTarget.style.transform = 'none';
      }    
  }

  const handleFavorite = () => {
    isFav ? removeFav(id) : addFav({id, name, status, species, gender, origin, image, onClose})
    setFav(!isFav)
  }

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setFav(true);
      }
    });
  }, [myFavorites]);

   return (
      <div className={style.container} onClick={handleOnClick} style={{ zIndex: isClicked ? 1 : 0 }}>
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
         <img src={image} alt={name} />
         <button className={[style.close, style.btn].join(' ')} onClick={() => onClose(id)}>X</button>
         <div className={style.info}>
            <Link to={`/detail/${id}`}>
               <h4 className={style.name}>{name}</h4>
            </Link>
            <h5>Estado: {status === 'Alive' ? '💓' : '💀'}</h5>
            <h5>Especie: {species}</h5>
            <h5>Género: {gender}</h5>
            <h5>Origen: {origin}</h5>
         </div>
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => dispatch(addFav(character)),
    removeFav: (id) => dispatch(removeFav(id)),
  }
};

const mapStateToProps = (state) => {
  return{
    myFavorites: state.myFavorites
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Card)