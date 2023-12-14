// import React from 'react'

import zorro1 from "../../images/zorro1.png";
import aguila2 from "../../images/aguila2.png";
import oso1 from "../../images/oso1.png";
import garduña2 from "../../images/garduña2.png";
import tejon1 from "../../images/tejon1.png";
import cuervo1 from "../../images/cuervo1.jpg";

import { useState } from "react";
import GetAvatar from "../GetAvatar";
import Profile from "../Profile";

function UsersPics() {
    const [avatar, setAvatar] = useState("");
    const updateAvatar = (avatar) => {
      setAvatar(avatar);
    };
  return (
    <div>
        <section className="usersPictures">
                  <div className="usersPicturesHeader">
                    <div className="usersPicText">
                      <h3 className="h3Foro">Sube aqui tus fotos...</h3>
                      <p>
                        Elige tu fondo favorito o sube fotos de plantas,
                        animales, paisajes...
                      </p>
                    </div>
                    <div className="uploadPic">
                      <Profile avatar={avatar} />
                      <GetAvatar avatar={avatar} updateAvatar={updateAvatar} />
                    </div>
                  </div>
                  <div className="usersPhoto">
                    <img  className="imgUsersPics" src={zorro1} alt="" />
                    <img  className="imgUsersPics" src={aguila2} alt="" />
                    <img  className="imgUsersPics" src={garduña2} alt="" />
                    <img  className="imgUsersPics" src={tejon1} alt="" />
                    <img className="imgUsersPics"  src={oso1} alt="" />
                    <img  className="imgUsersPics" src={cuervo1} alt="" />
                  </div>
                </section>
    </div>
  )
}

export default UsersPics