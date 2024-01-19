// import React from 'react'
// import Forest1 from "./forestsTypes/Forest1";
// import Forest2 from "./forestsTypes/Forest2";
import { Routes, Route, Link } from "react-router-dom";
import "../../styles/forests.scss";

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
                    <Link className="eachLink" to="/Forest1">BOSQUES DE CASTAÑOS
                     <p>
                    Bosques donde predomina el castaño (Castanea sativa), en algunos casos ejemplares centenarios, 
                    además de numerosos avellanos, robles, acebedas -únicas en la provincia de Salamanca- 
                    y sus cerezos silvestres de más de 20 metros de altura. Descubrimos este hermoso y 
                    desconocido bosque bajo la lluvia.                   
                    </p>
                    </Link>
                   
                  </div>
                  <div className="forestLink">
                    {" "}
                    <Link className="eachLink" to="/Forest2">BOSQUES MIXTOS DE FRONDOSAS
                     <p>
                     Masas boscosas de roble melojo o rebollo (Quercus Pirenayca), adapatados a climas secos 
                     y continentales. Conviven con ejemplares de encina, el sauce cenizo, 
                     haya, fresnos y castaño. El sotobosque se encuentra conformado 
                     principalmente por  los géneros Cytisus, Rubus y Rosa.                 
                    </p>
                    </Link>
                   
                    {/* <p>    Masas boscosas de roble melojo (Quercus Pirenayca), árboles que crecen sobre suelos silíceos, 
                     adapatados a climas secos y continentales. Se puede también encontrar ejemplares de encina 
                     (Quercus Ilex), y en su ámbito setas como Amanita muscaria, a. cesarea, boletus edulis, b. aereus. 
                     Y especies de árboles como el sauce cenizo (Salix atrocinerea), haya, fresnos y castaño. El sotobosque se encuentra conformado 
                     principalmente por especies de los géneros Cytisus, Rubus y Rosa.    </p> */}
                  </div>
                  <div className="forestLink">
                    {" "}
                    <Link className="eachLink" to="/Forest3">BOSQUES DE RIVERA
                    <p>
                    Formación vegetal con una variedad de flora concreta, que se extiende a lo largo de cauces de río. La primera franja suele presentar especies más pequeñas, como arbustos o juncos. Conforme el cauce del río avanza, se da paso a otras especies de mayor tamaño muy adaptados a suelos con un alto nivel freático como la familia de los Salix, Fresnos y chopos.
                    </p>
                    </Link>
                    
                  </div>
                  <div className="forestLink">
                    {" "}
                    <Link className="eachLink" to="/Forest4">BOSQUES DE PIORNO 
                      <p>
                    En las zonas más altas se encuentran los bosques de Piornos o retamas(genista florida),espectaculares cuando florecen. Forman extensos matorrales, solos o conviviendo con arbustos como el enebro rastrero, escoba blanca y con hierbas o matas, como viborera salmantina, el cantueso, tomillo perruno, Santolina, la dedalera.
                      </p>
                    </Link>
                  
                      {/* <p>
                    En las zonas más altas de la Sierra de Francia se encuentran los bosques de Piornos o retamas(genista florida), muestran una de las manifestaciones más espectaculares cuando florecen. Forman extensos matorrales, solos o conviviendo con otros arbustos, como el enebro rastrero (Juniperus communis), escoba blanca,  hierbas y matas, como viborera salmantina (Echium salmanticum), la ortegia (Ortegia hispanica, ), el cantueso ( Lavandula pedunculata), Lamiáceas, tomillo perruno, Santolina rosmarinifolia,  Asteráceas y la dedalera de flores rosadas (Digitalis thapsi Plantagináceas).
                      </p> */}
                  </div>
                  <div className="forestLink">
                    {" "}
                    <Link className="eachLink" to="/Forest5">BOSQUES DE DEHESA
                      <p>
                    En las inmediaciones de las Sierra de Francia y algunas manchas boscosas puntuales. Masas donde predomina la encina, 
                    con otras especies como el quejigo, y el alcornoque. El estrato inferior consta de altas presencias de Lavandula , Daphne gnidium o Cistus ladanifer, géneros como Thymus o Cytisus.        
                    </p>
                    </Link>
                  
                    {/* <p>
                    En las inmediaciones de las Sierra de Francia y algunas manchas boscosas puntuales. Masas en las que 
                    Quercus ilex aporta más de un 80% de los ejemplares, pero aparecen otras especies como el quejigo 
                    (Quercus faginea) y el alcornoque (Quercus suber). El estrato inferior consta de altas presencias de 
                    Lavandula stoechas, Daphne gnidium o Cistus ladanifer y otras especies de géneros como Thymus o Cytisus. Abundan los rebaños de vacas y de cerdos, sobretodo en la época de la montaners, cuando caen las bellotas del árbol y sirven de alimento al cerdo ibérico.             
                    </p> */}
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
