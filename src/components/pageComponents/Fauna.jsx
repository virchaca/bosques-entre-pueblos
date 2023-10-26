// import React from "react";
import aves1 from "../../images/aves/aves1.png";
import aves2 from "../../images/aves/Aves_migradoras_de_presencia_regular.png";
import mamiferos from "../../images/aves/mamiferos.png";
import reptiles from "../../images/aves/Anfibios_y_reptiles.png";
import invertebrados from "../../images/aves/Invertebrados.png";
import { Link } from "react-router-dom";

const Fauna = () => {
  return (
    <>
      <Link to="/" className="backToMain">
        <i className="fa-solid fa-left-long"></i> Back
      </Link>

      <div className="faunaSection">
        <h1>Aves y otros animales</h1>

        <span>Aves</span>
        <img src={aves1} alt="" />

        <span>
          Aves migradoras de presencia regular en la Sierra de Francia{" "}
        </span>

        <img src={aves2} alt="" />

        <p>Mamíferos de la sierra de Francia</p>
        <br />

        <img src={mamiferos} alt="" />

        <span>Anfibios y Reptiles de ka sierra de Francia</span>
        <img src={reptiles} alt="" />

        <span>Invertebrados de la sierra de Francia</span>
        <img src={invertebrados} alt="" />
      </div>
      <Link to="/" className="backToMain">
        <i className="fa-solid fa-left-long"></i> Back
      </Link>
    </>
  );
};

export default Fauna;
