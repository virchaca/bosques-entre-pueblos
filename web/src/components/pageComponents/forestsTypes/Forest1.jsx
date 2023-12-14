// import React from 'react'
import forest1 from "../../../images/forest1.png";
import { Link } from "react-router-dom";

const Forest1 = () => {
  return (
    <>
    <Link to="/Forests" className="backToMain">
      <i className="fa-solid fa-left-long"></i> Back
    </Link>

    <div className="forest1">
      <h1>Bosque de ...</h1>      
      <img className='imgForest1' src={forest1} alt="" />
     </div>

    <Link to="/Forests" className="backToMain">
      <i className="fa-solid fa-left-long"></i> Back
    </Link>
  </>
  );
};

export default Forest1;