import style from './Card.module.css';

export default function Card({name, status, species, gender, origin, image, onClose}) {
   return (
      <div className={style.container}>
         <img src={image} alt={name} />
         <button className={[style.close, style.btn].join(' ')} onClick={onClose}>X</button>
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
