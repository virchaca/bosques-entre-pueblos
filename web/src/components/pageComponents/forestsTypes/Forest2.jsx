// import React from 'react'
import { Link } from "react-router-dom";
import "../../../styles/forests.scss";

const Forest2 = () => {
  return (
    <>    
    <Link to="/Forests" className="backToMain">
      <i className="fa-solid fa-left-long"></i> Back
    </Link>

    <div className="forest2">
      <h1 className="leafyTitle">BOSQUE MIXTO DE FRONDOSAS</h1>          
     </div>
     <p className="leafyDescription">
                     Masas boscosas de roble melojo (Quercus Pirenayca), árboles que crecen sobre suelos silíceos, 
                     adapatados a climas secos y continentales. Se puede también encontrar ejemplares de encina 
                     (Quercus Ilex), y en su ámbito setas como Amanita muscaria, a. cesarea, boletus edulis, b. aereus. 
                     Y especies de árboles como el sauce cenizo (Salix atrocinerea), haya, fresnos y castaño. El sotobosque se encuentra conformado 
                     principalmente por especies de los géneros Cytisus, Rubus y Rosa.   
     </p>
     <br />
      <p className="inProcess">
        Inventario en proceso de elaboración.
      </p>
    <Link to="/Forests" className="backToMain">
      <i className="fa-solid fa-left-long"></i> Back
    </Link>
  </>
  )
}

export default Forest2