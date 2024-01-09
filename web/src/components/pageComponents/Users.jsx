/* eslint-disable react/no-unescaped-entities */
// import React from 'react'
import { Link } from "react-router-dom";
import user1 from "../../images/user1.png";

const Users = () => {
  return (
    <>
      <Link to="/" className="backToMain">
        <i className="fa-solid fa-left-long"></i> Back
      </Link>

      <div className="usersDiv">
        <p className="usersText">
          "Sección en construcción: Estamos trabajando en crear un espacio donde
          los usuarios podrán iniciar sesión, tener una cuenta personalizada y
          marcar las especies que desean ver pero aún no han tenido la
          oportunidad. Además, podrán listar sus especies favoritas y realizar
          anotaciones sobre las mismas. ¡Pronto estará disponible para su
          disfrute!"
        </p>
        <img className="usersImg" src={user1} alt="" />
        <p className=""></p>
      </div>
    </>
  );
};

export default Users;
