import "../styles/App.scss";
// import ls from './services/localStorage';

import { Routes, Route, Link } from "react-router-dom";
// import { useState } from "react";

import Header from "./mainComponents/Header";
import Hero from "./mainComponents/Hero";
import InfoSpace from "./mainComponents/InfoSpace";
import UsersPics from "./mainComponents/UsersPics";
import SponsorSpace from "./mainComponents/SponsorSpace";
import Contact from "./mainComponents/Contact";

import Fauna from "./pageComponents/Fauna";
import Forests from "./pageComponents/Forests";
import Users from "./pageComponents/Users";
import Card from "./pageComponents/Card";
// import Carroussel from "./Carroussel";

import Forest1 from "./pageComponents/forestsTypes/Forest1";
import Forest2 from "./pageComponents/forestsTypes/Forest2";
import Forest3 from "./pageComponents/forestsTypes/Forest3";
import Forest4 from "./pageComponents/forestsTypes/Forest4";
import Forest5 from "./pageComponents/forestsTypes/Forest5";

import { useEffect, useState } from "react";

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

  ///////////empiezo las cosas raras de conectar API////////////////

  const [allPlants, setAllPlants] = useState([]);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const response = await fetch("http://localhost:4001/plants");
        if (!response.ok) {
          throw new Error("Error al obtener los datos");
        }
        const Data = await response.json();
        setAllPlants(Data.results);
      } catch (error) {
        console.error("Error al obtener datos de la API:", error);
      }
    };

    fetchDataFromAPI();
  }, []);

    //////////cosas conectar API acaban
 
  
  //renderizar todas las plantas
  // const renderPlants = (plants) => {
  //   return (
  //     <ul className="ulList">
  //       {plants.map(plant => (
  //         <li key={plant.id}>
  //           <strong>Common Name:</strong> {plant.common_name}<br />
  //           <strong>Latin Name:</strong> {plant.latin_name}<br />
  //           <strong>Fam:</strong> {plant.fam}<br />
  //           <strong>Forest Type:</strong> {plant.forest_type}<br />
  //         </li>
  //       ))}
  //     </ul>
  //   );
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
                <Hero allPlants={allPlants}/>

                <section className="menuSection">
                  <span className="aPictures">
                    {" "}
                    <Link to="/forests" className="no-underline2">
                      LOS BOSQUES
                    </Link>
                  </span>

                  <span className="aPictures">
                    {" "}
                    <Link to="/Fauna" className="no-underline2">
                      {" "}
                      FAUNA{" "}
                    </Link>{" "}
                  </span>
                  {/* <span className="aPictures">
                    {" "}
                    <Link to="/Users" className="no-underline2">
                      USUARIOS
                    </Link>
                  </span> */}
                  <span className="aPictures">
                    <Link to="/Card" className="no-underline2">
                      CREA TU TARJETA
                    </Link>
                  </span>
                </section>
                <InfoSpace />
                <UsersPics />
                {/* de aquí he quitado: avatar={avatar}/> */}

                {/* <div className="arrowDiv">
                  <a href="/">
                    <i className="arrow fa-solid fa-circle-arrow-up fa-2xl"></i>
                  </a>
                </div> */}
                {/* <Carroussel /> */}

                {/* con este div se muestra la info de la API */}
                <section>
                  <h2>Mostrando el contenido de mi API desde React</h2>
                               
                </section>

                {/* hasta aquí el div que muestra la info de la API */}
                <SponsorSpace />
              </>
            }
          />
          <Route path="/Fauna" element={<Fauna />} />
          <Route path="/Forests" element={<Forests />} />
          <Route path="/Users" element={<Users />} />
          <Route path="/Card" element={<Card />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/Forest1" element={<Forest1 allPlants={allPlants} />} />
          <Route path="/Forest2" element={<Forest2 allPlants={allPlants} />} />
          <Route path="/Forest3" element={<Forest3 allPlants={allPlants} />} />
          <Route path="/Forest4" element={<Forest4 allPlants={allPlants} />} />
          <Route path="/Forest5" element={<Forest5 allPlants={allPlants} />} />
          <Route path="/UsersPics" element={<UsersPics />} />
        </Routes>
      </main>

      <footer className="footer">
        <p className="mybrand">
          <a
            href="https://virchaca.github.io/portfolio/"
            target="blank"
            title="Portfolio"
          >
            <i className="icons fa-solid fa-user-tie"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/virginia-alvarezperez/"
            target="blank"
            title="Virginia Alvarez Perez"
          >
            <i className="icons fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/virchaca"
            target="blank"
            title="Github Virchaca"
          >
            <i className="icons fa-brands fa-github-alt"></i>
          </a>{" "}
          @VirWebCreations
        </p>
      </footer>
    </>
  );
}

export default App;
