// import React from 'react'
import moni1 from "../../images/moni1.png";
import moni2 from "../../images/moni2.png";
import moni3 from "../../images/moni3.png";
import moni4 from "../../images/moni4.png";
import moni5 from "../../images/moni5.png";
import moni6 from "../../images/moni6.png";

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
                    <img src={moni1} alt="" />
                    <img src={moni2} alt="" />
                    <img src={moni3} alt="" />
                    <img src={moni4} alt="" />
                    <img src={moni5} alt="" />
                    <img src={moni6} alt="" />
                  </div>
                </section>
    </div>
  )
}

export default UsersPics