import "../styles/App.scss";
// import ls from './services/localStorage';

import { Routes, Route, Link } from "react-router-dom";
// import { useState } from "react";

import Header from "./mainComponents/Header";
import Hero from "./mainComponents/Hero";
import InfoSpace from "./mainComponents/InfoSpace";
import UsersPics from "./mainComponents/UsersPics";
import SponsorSpace from "./mainComponents/SponsorSpace";

import Fauna from "./pageComponents/Fauna";
import Forests from "./pageComponents/Forests";
import Users from "./pageComponents/Users";
import Card from "./pageComponents/Card";

import Forest1 from "./pageComponents/forestsTypes/Forest1";
import Forest2 from "./pageComponents/forestsTypes/Forest2";
import Forest3 from "./pageComponents/forestsTypes/Forest3";
import Forest4 from "./pageComponents/forestsTypes/Forest4";
import Forest5 from "./pageComponents/forestsTypes/Forest5";

// me lo he llevado a UsersPics
// import moni7 from "../images/moni7.png";
// import GetAvatar from "./GetAvatar";
// import Profile from "./Profile";

function App() {
  // me lo he llevado a UsersPics
  //const [avatar, setAvatar] = useState("");
  // const updateAvatar = (avatar) => {
  //   setAvatar(avatar);
  // };

  return (
    <>
      <Header />

      <main id="main">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />

                <section className="menuSection">
                  <span className="aPictures">
                    {" "}
                    <Link to="/forests" className="no-underline2">LOS BOSQUES</Link>
                  </span>

                  <span className="aPictures">
                    {" "}
                    <Link to="/Fauna" className="no-underline2"> FAUNA </Link>{" "}
                  </span>
                  <span className="aPictures">
                    {" "}
                    <Link to="/Users" className="no-underline2">USUARIOS</Link>
                  </span>
                  <span className="aPictures">
                    <Link to="/Card" className="no-underline2">CREA TU TARJETA</Link>
                  </span>
                </section>
                <InfoSpace />
                <UsersPics />
                {/* de aqui he quitado: avatar={avatar}/> */}

                <div className="arrowDiv">
                  <a href="/">
                    <i className="arrow fa-solid fa-circle-arrow-up fa-2xl"></i>
                  </a>
                </div>

                <SponsorSpace />
              </>
            }
          />
          <Route path="/Fauna" element={<Fauna />} />
          <Route path="/Forests" element={<Forests />} />
          <Route path="/Users" element={<Users />} />
          <Route path="/Card" element={<Card />} />
          <Route path="/Forest1" element={<Forest1 />} />
          <Route path="/Forest2" element={<Forest2 />} />
          <Route path="/Forest3" element={<Forest3 />} />
          <Route path="/Forest4" element={<Forest4 />} />
          <Route path="/Forest5" element={<Forest5 />} />
          <Route path="/UsersPics" element={<UsersPics/>} />
        </Routes>
      </main>

      <footer className="footer">
        <span>publi</span>
        <span>iconos</span>
        <span>enlaces</span>
        <span>@@@</span>
        <span>@LaVirWebForge2023</span>
      </footer>
    </>
  );
}

export default App;
