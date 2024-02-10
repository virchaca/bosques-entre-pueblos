// import React from 'react'
import { Link } from "react-router-dom";
import "../../../styles/forests.scss";
import PropTypes from "prop-types";

const Forest2 = ({ allPlants }) => {

  const renderPlantsFrondosas = (plants) => {
    return (
      <ul className="ulListFrondosas">
        {plants
          .filter((item) => item.forest_type === "Frondosas")
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

      <div className="forest2">
        <h1 className="leafyTitle">BOSQUE MIXTO DE FRONDOSAS</h1>
      </div>
      <p className="leafyDescription">
        {" "}
        Masas boscosas de roble melojo o rebollo (Quercus Pirenayca), árboles
        que crecen sobre suelos silíceos, adapatados a climas secos y
        continentales. Se puede también encontrar ejemplares de encina (Quercus
        Ilex), y en su ámbito setas como Amanita muscaria, a. cesarea, boletus
        edulis, b. aereus. Y especies de árboles como el sauce cenizo (Salix
        atrocinerea), haya, fresnos y castaño. El sotobosque se encuentra
        conformado principalmente por especies de los géneros Cytisus, Rubus y
        Rosa.{" "}
      </p>
  
      <br />
      <div>
                    <h2>Bosque de frondosas</h2>
                    {allPlants.length > 0 ? (
                      renderPlantsFrondosas(allPlants)
                    ) : (
                      <p>Cargando datos...</p>
                    )}
                  </div>

      <p className="inProcess">Inventario en proceso de elaboración.</p>
      <Link to="/Forests" className="backToMain">
        <i className="fa-solid fa-left-long"></i> Back
      </Link>
    </>
  );
};

Forest2.propTypes = {
  allPlants: PropTypes.array.isRequired,
};

export default Forest2;
