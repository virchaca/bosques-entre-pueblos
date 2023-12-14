// import React from 'react'
// import Forest1 from "./forestsTypes/Forest1";
// import Forest2 from "./forestsTypes/Forest2";
import { Routes, Route, Link } from "react-router-dom";

const Forests = () => {
  return (
    <>
      <Link to="/" className="backToMain">
        <i className="fa-solid fa-left-long"></i> Back
      </Link>

      <div className="forestsDiv">      
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h3 className="forestTypesTitle">TIPOS DE BOSQUES</h3>
                <section className="forestsTypes">
                  {" "}
                  <div className="forestLink">
                    {" "}
                    <Link to="/Forest1">BOSQUES TIPO...1</Link>
                    <p>
                      Este bosque va de esto: Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Voluptatibus sapiente
                      consectetur excepturi nesciunt itaque debitis expedita
                      amet, iusto accusantium rem exercitationem ratione quae,
                      id reiciendis, beatae fugiat doloremque obcaecati quas!                    
                    </p>
                  </div>
                  <div className="forestLink">
                    {" "}
                    <Link to="/Forest2">BOSQUES TIPO...2</Link>
                    <p>
                      Este bosque va de esto: Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Voluptatibus sapiente
                      consectetur excepturi nesciunt itaque debitis expedita
                      amet, iusto accusantium rem exercitationem ratione quae,
                      id reiciendis, beatae fugiat doloremque obcaecati quas!                      
                    </p>
                  </div>
                  <div className="forestLink">
                    {" "}
                    <Link to="/Forest3">BOSQUES TIPO...3</Link>
                    <p>
                      Este bosque va de esto: Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Voluptatibus sapiente
                      consectetur excepturi nesciunt itaque debitis expedita
                      amet, iusto accusantium rem exercitationem ratione quae,
                      id reiciendis, beatae fugiat doloremque obcaecati quas! 
                    </p>
                  </div>
                  <div className="forestLink">
                    {" "}
                    <Link to="/Forest4">BOSQUES TIPO...4</Link>
                    <p>
                      Este bosque va de esto: Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Voluptatibus sapiente
                      consectetur excepturi nesciunt itaque debitis expedita
                      amet, iusto accusantium rem exercitationem ratione quae,
                      id reiciendis, beatae fugiat doloremque obcaecati quas!                      
                    </p>
                  </div>
                  <div className="forestLink">
                    {" "}
                    <Link to="/Forest5">BOSQUES TIPO...5</Link>
                    <p>
                      Este bosque va de esto: Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Voluptatibus sapiente
                      consectetur excepturi nesciunt itaque debitis expedita
                      amet, iusto accusantium rem exercitationem ratione quae,
                      id reiciendis, beatae fugiat doloremque obcaecati quas!                    
                    </p>
                  </div>
                </section>
              </>
            }
          />
          {/* <Route path="/Forest1" element={<Forest1 />} />          
          <Route path="/Fauna" element={<Forest2 />} /> */}
        </Routes>
        <p className="forestText">
          VEGETACIÓN En las cumbres más altas del Parque Natural, la vegetación
          ha tenido que adaptarse a la crudeza del clima, dominando el piorno y
          el erizón. A menor altitud aparecen los bosques de rebollo y
          castañares, en cuyo sotosbosque crecen acebos, serbales y arce menor.
          En las zonas de robledal más frías, húmedas y orientadas al noroeste
          encontramos algunos abedulares. Es reseñable la presencia en el
          territorio de algunos robles de condiciones climáticas más húmedas,
          como el carballo (Quercus robur) o la famosa «Haya de Herguijuela de
          la Sierra», referida por multitud de autores como una de las más
          meridionales de la Península Ibérica. Al sur y descendiendo en
          altitud, empiezan a aparecer especies típicamente mediterráneas que
          dan paso a una de las formaciones más emblemáticas de este Espacio: el
          encinar. Entre encinas retorcidas encontramos notables ejemplares de
          alcornoques, tejos, madroños, durillos, lentiscos, enebros y algún
          almez, confundidos entre la abundante cobertura que proporciona la
          jara pringosa. Dentro del Parque se encuentran también comunidades
          higroturbosas típicas del Sistema Central, en las que destacan la
          carnívora atrapamoscas o los «brezales de carroncha». Además aparecen
          grandes áreas cultivadas de árboles frutales, viñedos y olivares,
          entre los que destacan por su extensión los cultivos de cerezo, base
          económica de muchos pueblos de la Sierra. Como especie exclusiva del
          Parque Natural cabe destacar la Armeria salmantica, planta que forma
          pequeñas matas y crece únicamente en el entorno de la Peña de Francia.
          
        </p>
        
      </div>
      <Link to="/" className="backToMain">
        <i className="fa-solid fa-left-long"></i> Back
      </Link>
    </>
  );
};

export default Forests;
