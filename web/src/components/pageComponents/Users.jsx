// import React from 'react'
import { Link } from "react-router-dom";
import user1 from '../../images/user1.png';

const Users = () => {
  return (
    <>
      <Link to="/" className="backToMain">
        <i className="fa-solid fa-left-long"></i> Back
      </Link>

      <div className="usersDiv">
        <section className=""> 
        <p>ESPACIO PARA EL USUSARIO</p>
        <img className="usersImg" src={user1} alt="" /></section>
        <p className="">
         
        </p>
      </div>
    </>
  );
};

export default Users;
