// import React from 'react'
import forest3 from "../../../images/forest3.png";
import { Link } from "react-router-dom";

const Forest3 = () => {
  return (
    <>
    <Link to="/Forests" className="backToMain">
      <i className="fa-solid fa-left-long"></i> Back
    </Link>

    <div className="forest3">
      <h1>Bosque de ...</h1>      
      <img className='imgForest3' src={forest3} alt="" />
     </div>
     
    <Link to="/Forests" className="backToMain">
      <i className="fa-solid fa-left-long"></i> Back
    </Link>
  </>
  )
}

export default Forest3