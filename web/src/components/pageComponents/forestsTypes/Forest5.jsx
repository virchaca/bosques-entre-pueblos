// import React from 'react'
import { Link } from "react-router-dom";
import "../../../styles/forests.scss";
import PropTypes from "prop-types";

const Forest5 = ({ allPlants }) => {
  const renderPlantsDehesa = (plants) => {
    return (
      <ul className="ulListDehesa">
        {plants
          .filter((item) => item.forest_type === "Dehesa")
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

      <div className="forest5">
        <h1 className="holmTitle">BOSQUE DE DEHESA</h1>
      </div>
      <p className="holmDescription">
        En las inmediaciones de las Sierra de Francia y algunas manchas boscosas
        puntuales. Masas en las que Quercus ilex aporta más de un 80% de los
        ejemplares, pero aparecen otras especies como el quejigo (Quercus
        faginea) y el alcornoque (Quercus suber). El estrato inferior consta de
        altas presencias de Lavandula stoechas, Daphne gnidium o Cistus
        ladanifer y otras especies de géneros como Thymus o Cytisus. Abundan los
        rebaños de vacas y de cerdos, sobretodo en la época de la montaners,
        cuando caen las bellotas del árbol y sirven de alimento al cerdo
        ibérico.
      </p>
      
      <div>
        <h2>Bosque de Dehesa</h2>
        {allPlants.length > 0 ? (
          renderPlantsDehesa(allPlants)
        ) : (
          <p>Cargando datos...</p>
        )}
      </div>

      <br />
      <p className="inProcess">Inventario en proceso de elaboración.</p>

      <Link to="/Forests" className="backToMain">
        <i className="fa-solid fa-left-long"></i> Back
      </Link>
    </>
  );
};

Forest5.propTypes = {
  allPlants: PropTypes.array.isRequired,
};

export default Forest5;
