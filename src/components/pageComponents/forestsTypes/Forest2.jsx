// import React from 'react'
import forest2 from "../../../images/forest2.png";
import { Link } from "react-router-dom";

const Forest2 = () => {
  return (
    <>    
    <Link to="/Forests" className="backToMain">
      <i className="fa-solid fa-left-long"></i> Back
    </Link>

    <div className="forest2">
      <h1>Bosque de ...</h1>      
      <img className='imgForest2' src={forest2} alt="" />
     </div>
     
    <Link to="/Forests" className="backToMain">
      <i className="fa-solid fa-left-long"></i> Back
    </Link>
  </>
  )
}

export default Forest2