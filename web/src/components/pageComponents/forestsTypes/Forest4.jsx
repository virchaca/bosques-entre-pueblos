// import React from 'react'
// import forest1 from "../../../images/forest1.png";
import { Link } from "react-router-dom";
import "../../../styles/forests.scss";
import PropTypes from "prop-types";

const Forest4 = ({ allPlants }) => {

  const renderPlantsPiorno = (plants) => {
    return (
      <ul className="ulListPiorno">
        {plants
          .filter((item) => item.forest_type === "Piorno")
          .map((plant) => (
            <li key={plant.id}>
              <strong>Common Name:</strong> {plant.common_name}
              <br />
              <strong>Latin Name:</strong> {plant.latin_name}
              <br />
              <strong>Fam:</strong> {plant.fam}
              <br />
              <strong>Forest Type:</strong> {plant.forest_type}
              <br />
            </li>
          ))}
      </ul>
    );
  };

  
  return (
    <>
      <Link to="/Forests" className="backToMain">
        <i className="fa-solid fa-left-long"></i> Back
      </Link>

      <div className="forest4">
        <h1 className="piornoTitle">BOSQUE DE PIORNO</h1>
      </div>
      <p className="piornoDescription">
        En las zonas más altas de la Sierra de Francia se encuentran los bosques
        de Piornos o retamas(genista florida), muestran una de las
        manifestaciones más espectaculares cuando florecen. Forman extensos
        matorrales, solos o conviviendo con otros arbustos, como el enebro
        rastrero (Juniperus communis), escoba blanca, hierbas y matas, como
        viborera salmantina (Echium salmanticum), la ortegia (Ortegia hispanica,
        ), el cantueso ( Lavandula pedunculata), Lamiáceas, tomillo perruno,
        Santolina rosmarinifolia, Asteráceas y la dedalera de flores rosadas
        (Digitalis thapsi Plantagináceas).
      </p>
      <div>
                    <h2>Bosque de Piorno</h2>
                    {allPlants.length > 0 ? (
                      renderPlantsPiorno(allPlants)
                    ) : (
                      <p>Cargando datos...</p>
                    )}
                  </div>
      {/* <img className='imgForest4' src={forest1} alt="" /> */}

      <br />
      <p className="inProcess">Inventario en proceso de elaboración.</p>

      <Link to="/Forests" className="backToMain">
        <i className="fa-solid fa-left-long"></i> Back
      </Link>
    </>
  );
};

Forest4.propTypes = {
  allPlants: PropTypes.array.isRequired,
};

export default Forest4;
