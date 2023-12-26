// import React from 'react'

import { Link } from "react-router-dom";

const Forest3 = () => {
  return (
    <>
    <Link to="/Forests" className="backToMain">
      <i className="fa-solid fa-left-long"></i> Back
    </Link>

    <div className="forest3">
      <h1 className="riverTitle">BOSQUE DE RIVERA</h1>            
     </div>
     <p className="riverDescription">Formación vegetal que presenta una variedad de fauna y flora concretas, constituyendo un ecosistema de gran valor, sobre todo en zonas de climas secos como es el caso de Castilla. Se caracteriza por extenderse a lo largo de cauces de río, sobre terrenos que se encuentran empapados de agua. Depende las condiciones del mismo, la vegetación es diferente. La primera franja suele presentar especies más pequeñas, como arbustos o juncos, que son capaces de aguantar las crecidas periódicas del nivel del agua.
     Conforme el cauce del río avanza, se da paso a otras especies de mayor tamaño: al principio, con árboles de pequeño tamaño y muy adaptados a suelos con un alto nivel freático como, por ejemplo, la familia de los Salix. Poco a poco se descubren especies menos tolerantes, pero que siguen necesitando las condiciones de alta humedad que ofrece este entorno como es el caso del género Fraxinus.</p>
     
    <Link to="/Forests" className="backToMain">
      <i className="fa-solid fa-left-long"></i> Back
    </Link>
  </>
  )
}

export default Forest3