// import React from 'react'
// import forest1 from "../../../images/forest1.png";
import { Link } from "react-router-dom";

const Forest1 = () => {
  return (
    <>
      <Link to="/Forests" className="backToMain">
        <i className="fa-solid fa-left-long"></i> Back
      </Link>

      <div className="forest1">
        <h1 className="chestnutTitle">BOSQUE DE CASTAÑOS</h1>
        {/* <img className='imgForest1' src={forest1} alt="" /> */}
      </div>
      <p className="chestnutDescription">
        {" "}
        El árbol dominante de este bosque es el castaño, castannea sativa, con
        ejemplares de envergadura que crecen entre tilos(Tilia platyphyllos),
        acacias (Acacia sp), especie de origen asiático altamente invasiva y
        algunos pinos (Pinus sp). El castaño es un arbol caducifoliao, de la
        familia de las fagáceas, que crece en climas atlanticos y suelos
        silíceos. Su tronco liso y recto alcanza conn facilidad 30 metros de
        altura, con una amplia copa, que da como fruto la castaña. Algunas
        especies convivientes en estos bosques, en los sucesivos escalones
        vegetales, son: rebollos (quecus pyrenaica), castaños y pinos de
        repoblación (pinus pinaster ypinus sylvestris), abedules (betula
        celtiberica), alamaos temblones (populus tremula), serbales (sorbus
        aucuparia), avellanos (coryllus avellana), fresnos (fraxinus excelsior),
        arándanos (Vaccinium mirtyllus), majuelos (Crateagus monogyna) y plantas
        deporte hérbáceo.{" "}
      </p>

      <p className="inProcess">
        El inventario se encuentra actualmente en proceso, mientras llevamos a
        cabo la identificación y clasificación de las especies. Agradecemos su
        paciencia y comprensión durante este período.
      </p>

      <Link to="/Forests" className="backToMain">
        <i className="fa-solid fa-left-long"></i> Back
      </Link>
    </>
  );
};

export default Forest1;
