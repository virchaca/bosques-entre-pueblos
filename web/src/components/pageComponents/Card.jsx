import { Link } from "react-router-dom";
import card1 from '../../images/card1.png';
import "../../styles/card.scss";

const Card = () => {
  return (
    <>
      <Link to="/" className="backToMain">
        <i className="fa-solid fa-left-long"></i> Back
      </Link>

    <div className='cardSection'>
    <form className="cardForm">
        <label htmlFor="">Nombre
        <input type="text" name="" id="" placeholder="escribe aqui tu nombre"/></label>
        <label htmlFor="">Apellido 
        <input type="text" name="" id="" placeholder="escribe aqui tu apellido" /></label>
        <label htmlFor="">Lugares visitados</label>
        <textarea name="" id="" cols="30" rows="3" placeholder="escribe aqui algunos de los sitios que has visitado"></textarea>
        <label htmlFor="">Anécdotas</label>
        <textarea name="" id="" cols="30" rows="3" placeholder="escribe aqui alguna anecdota que te haya sucedido durante tu visita y que quieras recordar"></textarea>
        <label htmlFor="">Fecha
        <input type="text" name="" id="" /></label>
        <label htmlFor=""> Elige que fondo prefieres en tu tarjeta personal</label>
        <select name="backgrounds" id="">
            <option value="">fondo1</option>
            <option value="">fondo2</option>
            <option value="">fondo3</option>           
        </select>
    </form>
    <img src={card1} alt="" />    
    </div>

    <Link to="/" className="backToMain">
        <i className="fa-solid fa-left-long"></i> Back
      </Link>

    </>
  )
}

export default Card;
