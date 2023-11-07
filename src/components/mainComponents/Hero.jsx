// import React from 'react'

import { useState } from "react";

function Hero() {
const [season, setSeason] = useState('');

//   const handleSelectSeason = (ev) => {
//     const actualSeason = ev.target.value;
//     if (season==='summer') {

//     } else if (
//       season==='autumn'
//     ){
//   } else if (
//     season==='winter'
//   ){
// } else if (
//   season==='sprint'
// ){}
//   }

const handleSelectSeason = (ev) => {
  const actualSeason = ev.target.value;
  setSeason(actualSeason);
}

  const handleSubmit = (ev) => {
    ev.preventDefault();
  }
  return (
    <div>
      <section className="hero">
        <div className="formDisplay">
                  <nav>
                    <ul className="ulWiki">
                      <form className="mainSectionForm" onSubmit={handleSubmit}>
                        <label htmlFor="">
                          <input
                            type="search"
                            name="q"
                            placeholder="Nombre planta"
                            className="plantInput"
                          />
                          <input
                            type="submit"
                            value="Buscar"
                            className="plantInput"
                          />
                        </label>

                        <label className="seasonInput" htmlFor="season">
                          en que momento del año nos visitas
                        </label>
                        <select
                          id="season"
                          name="select"
                          className="seasonInput"
                          value={season}
                          onChange={handleSelectSeason}
                        >
                          <option value="">elige estacion</option>
                          <option value="summer">verano</option>
                          <option value="autumn">otoño</option>
                          <option value="winter">invierno</option>
                          <option value="spring">primavera</option>
                        </select>
                      </form>                      
                    </ul>       
                    </nav>
                    <div>
                    <p className={`summer seasonTips ${season === 'summer' ? '' : 'hidden'}`}>
                    o mejor que ver y hacer en VERANITO:
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, qui dignissimos? Dolores, maxime provident mollitia vitae cupiditate odio distinctio sint dolorem iusto exercitationem cumque illo sapiente. Nisi similique dolorum assumenda.</p>
                      <p className={`autumn seasonTips ${season === 'autumn' ? '' : 'hidden'}`}>
                        lo mejor que ver y hacer en OTOÑO:
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, qui dignissimos? Dolores, maxime provident mollitia vitae cupiditate odio distinctio sint dolorem iusto exercitationem cumque illo sapiente. Nisi similique dolorum assumenda.</p>
                      <p className={`winter seasonTips ${season === 'winter' ? '' : 'hidden'}`}>
                        lo mejor que ver y hacer en INVIERNO:
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, qui dignissimos? Dolores, maxime provident mollitia vitae cupiditate odio distinctio sint dolorem iusto exercitationem cumque illo sapiente. Nisi similique dolorum assumenda.</p>

                      <p className={`spring seasonTips ${season === 'spring' ? '' : 'hidden'}`}>
                        lo mejor que ver y hacer en PRIMAVERA:
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, qui dignissimos? Dolores, maxime provident mollitia vitae cupiditate odio distinctio sint dolorem iusto exercitationem cumque illo sapiente. Nisi similique dolorum assumenda.</p>
                    </div>                    
                    </div>
                  
                  <p className="intro">
                    Su importancia vegetal radica principalmente en la
                    existencia de forests galaico-portugueses de roble rebollo y
                    roble carballo (en cuyo sotosbosque crecen acebos, serbales
                    y arce menor) y los castaños, que constituyen una población
                    de gran valor por su adaptación al clima de la zona pues
                    sólo se encuentran en zonas bastante húmedas durante todo el
                    año. Entre otros ecosistemas con los que cuenta se podrían
                    destacar los brezales secos europeos y mediterráneos
                    endémicos con aliaga, las zonas subestépicas de gramíneas y
                    anuales del Thero-Brachypodietea, encinares de Quercus ilex
                    y Quercus rotundifolia, los forests de Castanea sativa, los
                    alcornocales de Quercus suber y los pinares mediterráneos de
                    Pinus pinaster y Pinus sylvestris. Además aparecen grandes
                    áreas cultivadas de árboles frutales, viñedos y olivares,
                    entre los que destacan por su extensión los cultivos de
                    cerezo, base económica de muchos pueblos de la sierra.En las
                    cumbres más altas del parque natural la vegetación se adapta
                    al clima de montaña, dominando el piorno y el erizón entre
                    pastos pastoriles. Es el único lugar de la región
                    biogeográfica mediterránea española en la que se ha
                    encontrado el briofito Bruchia vogesiaca.
                  </p>
                </section>
    </div>
  )
}

export default Hero