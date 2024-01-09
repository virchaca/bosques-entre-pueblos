// import React from 'react'
import { Link } from "react-router-dom";

const Forest5 = () => {
  return (
    <>
    <Link to="/Forests" className="backToMain">
      <i className="fa-solid fa-left-long"></i> Back
    </Link>

    <div className="forest5">
      <h1 className="holmTitle" >BOSQUE DE DEHESA</h1>      
    </div>
    <p className="holmDescription">
                    En las inmediaciones de las Sierra de Francia y algunas manchas boscosas puntuales. Masas en las que 
                    Quercus ilex aporta más de un 80% de los ejemplares, pero aparecen otras especies como el quejigo 
                    (Quercus faginea) y el alcornoque (Quercus suber). El estrato inferior consta de altas presencias de 
                    Lavandula stoechas, Daphne gnidium o Cistus ladanifer y otras especies de géneros como Thymus o Cytisus. Abundan los rebaños de vacas y de cerdos, sobretodo en la época de la montaners, cuando caen las bellotas del árbol y sirven de alimento al cerdo ibérico.             
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

export default Forest5;