import {useState} from 'react';
import style from './Card.module.css';

export default function Card({id, name, status, species, gender, origin, image, onClose}) {
   const [isHover, setIsHover] = useState(false);

   const handleMouseEnter = (e) => {
    setIsHover(true);
    const cardRect = e.currentTarget.getBoundingClientRect();
    const cardX = cardRect.left + cardRect.width / 2;
    const cardY = cardRect.top + cardRect.height / 2;
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const translateX = screenWidth / 2 - cardX;
    const translateY = screenHeight / 2 - cardY;
    
    e.currentTarget.style.transform = `translate(${translateX}px, ${translateY}px)`;
  }

  const handleMouseLeave = (e) => {
    setIsHover(false);
    e.currentTarget.style.transform = 'none';
  }

   return (
      <div className={style.container} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ zIndex: isHover ? 1 : 0 }}>
         <img src={image} alt={name} />
         <button className={[style.close, style.btn].join(' ')} onClick={() => onClose(id)}>X</button>
         <div className={style.info}>
            <h4 className={style.name}>{name}</h4>
            <h5>Estado: {status === 'Alive' ? '💓' : '💀'}</h5>
            <h5>Especie: {species}</h5>
            <h5>Género: {gender}</h5>
            <h5>Origen: {origin}</h5>
         </div>
      </div>
   );
}
