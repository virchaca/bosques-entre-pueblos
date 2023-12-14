// import React from 'react'
import forest5 from "../../../images/forest5.png";
import { Link } from "react-router-dom";

const Forest5 = () => {
  return (
    <>
    <Link to="/Forests" className="backToMain">
      <i className="fa-solid fa-left-long"></i> Back
    </Link>

    <div className="forest5">
      <h1>Bosque de ...</h1>      
      <img className='imgForest5' src={forest5} alt="" />
     </div>

    <Link to="/Forests" className="backToMain">
      <i className="fa-solid fa-left-long"></i> Back
    </Link>
  </>
  );
};

export default Forest5;