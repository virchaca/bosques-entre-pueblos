// import React from 'react'
import forest4 from "../../../images/forest4.png";
import { Link } from "react-router-dom";

const Forest4 = () => {
  return (
    <>
    <Link to="/Forests" className="backToMain">
      <i className="fa-solid fa-left-long"></i> Back
    </Link>

    <div className="forest4">
      <h1>Bosque de ...</h1>      
      <img className='imgForest4' src={forest4} alt="" />
     </div>
     
    <Link to="/Forests" className="backToMain">
      <i className="fa-solid fa-left-long"></i> Back
    </Link>
  </>
  )
}

export default Forest4