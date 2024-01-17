import { Link } from "react-router-dom";
// import card1 from '../../images/card1.png';
import "../../styles/card.scss";
import { useState, useRef } from "react";
/* instalo e importo html12camvas */
import html2canvas from "html2canvas";

const Card = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [places, setPlaces] = useState("");
  const [anecdote, setAnecdote] = useState("");
  const [date, setDate] = useState("");
  const [bottomPic, setBottomPic] = useState("fondo1");

  /*para imagen canvas*/
  const [imageData, setImageData] = useState(null);
  const cardBottomRef = useRef(null);

  const handleInputName = (ev) => {
    const inputValue = ev.target.value;
    const inputId = ev.target.id;
    setName(inputValue, inputId);
    // handleClickInput(inputValue, inputId);
  };
  const handleInputSurname = (ev) => {
    const inputValue = ev.target.value;
    const inputId = ev.target.id;
    setSurname(inputValue, inputId);
  };

  const handleInputPlaces = (ev) => {
    const inputValue = ev.target.value;
    const inputId = ev.target.id;
    setPlaces(inputValue, inputId);
  };

  const handleInputAnecdote = (ev) => {
    const inputValue = ev.target.value;
    const inputId = ev.target.id;
    setAnecdote(inputValue, inputId);
  };

  const handleInputDate = (ev) => {
    const inputValue = ev.target.value;
    const inputId = ev.target.id;
    setDate(inputValue, inputId);
  };

  const handleBottomPic = (ev) => {
    setBottomPic(ev.target.value);
  };

  const handleClickCreateCard = () => {
    // Generar la imagen
    html2canvas(cardBottomRef.current).then((canvas) => {
      const dataUrl = canvas.toDataURL("image/png");
      setImageData(dataUrl);
    });
  };
  const handleReset = () => {
    setName("");
    setSurname("");
    setPlaces("");
    setAnecdote("");
    setDate("");
    setImageData("");
  };

  return (
    <>
      <Link to="/" className="backToMain">
        <i className="fa-solid fa-left-long"></i> Back
      </Link>
      <section className="cardBox">
      <p className="cardIntro">Elige entre los distintos fondos de fotos de la Sierra de Francia y crea una tarjeta con tus datos, fecha, lugares visitados y alguna anécdota que te gustaría recordar. Dale al botón de crear tarjeta y se generará un enlace donde descargar tu tarjeta. Puedes crear tantas como quieras, solo pulsa en crear una nueva y empieza otra vez!</p>
        <div className="cardSection">
          
          <form className="cardForm">
      
            <label htmlFor="">
              Nombre
              <input
                className=""
                type="text"
                placeholder="escribe aqui tu nombre"
                name="name"
                id="name"
                value={name}
                onChange={handleInputName}
              />
            </label>

            <label htmlFor="">
              Apellido
              <input
                type="text"
                placeholder="escribe aqui tu apellido"
                name="surname"
                id="surname"
                value={surname}
                onChange={handleInputSurname}
              />
            </label>

            <label htmlFor="">
              Fecha
              <input
                type="text"
                placeholder="escribe aqui la fecha"
                name="date"
                id="date"
                value={date}
                onChange={handleInputDate}
              />
            </label>

            <label htmlFor="">Lugares visitados</label>
            <textarea
              name="places"
              id="places"
              cols="30"
              rows="3"
              placeholder="escribe aqui algunos de los sitios que has visitado"
              value={places}
              onChange={handleInputPlaces}
            ></textarea>
            <label htmlFor="">Anécdotas</label>
            <textarea
              name="anecdote"
              id="anecdote"
              cols="30"
              rows="3"
              placeholder="escribe aqui alguna anecdota que te haya sucedido durante tu visita y que quieras recordar"
              value={anecdote}
              onChange={handleInputAnecdote}
            ></textarea>

            <label htmlFor="">
              {" "}
              Elige que fondo prefieres en tu tarjeta personal
            </label>
            <select
              name="backgrounds"
              id="backgrounds"
              value={bottomPic}
              onChange={handleBottomPic}
            >
              <option value="fondo1">fondo1</option>
              <option value="fondo2">fondo2</option>
              <option value="fondo3">fondo3</option>
              <option value="fondo4">fondo4</option>
              <option value="fondo5">fondo5</option>
              <option value="fondo6">fondo6</option>
            </select>
          </form>

          {/*  aqui empiezo cambios para canvas */}
<div className="cardBottomBack">


          <section className={`cardBottom ${bottomPic}`} ref={cardBottomRef}>
            <div>
              {" "}
              <p className="cardFinalText cardName">
                {name +
                  (surname ? ` ${surname} - ` : "") +
                  (date ? ` ${date} ` : "") || "Nombre, Apellido y Fecha:"}
              </p>
            </div>
            <div>
              {" "}
              <p className="cardFinalText ">{places || "Lugares visitados:"}</p>
              <p className="cardFinalText">{anecdote || "Anécdotas:"}</p>
            </div>
          </section>
        </div>
        </div>
        <div className="cardBtns">
          <section className="createCard">
            <button className="singleBtn" onClick={handleClickCreateCard}>
              Crear Tarjeta
            </button>

            {imageData && (
              <section className="downloadImage">
                <a href={imageData} download="tarjeta.png">
                  Descarga tu tarjeta
                </a>
              </section>
            )}
            <button className="singleBtn" onClick={handleReset}>
              Crea Una Nueva
            </button>
          </section>
        </div>
      </section>

      <Link to="/" className="backToMain">
        <i className="fa-solid fa-left-long"></i> Back
      </Link>
    </>
  );
};

export default Card;
