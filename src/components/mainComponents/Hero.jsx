// import React from 'react'

function Hero() {
  return (
    <div>
      <section className="hero">
                  <nav>
                    <ul className="ulWiki">
                      <form className="mainSectionForm">
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

                        <label className="seasonInput" htmlFor="estacion">
                          en que momento del año nos visitas
                        </label>
                        <select
                          id="estacion"
                          name="select"
                          className="seasonInput"
                        >
                          <option value="">elige estacion</option>
                          <option value="verano">verano</option>
                          <option value="otoño">otoño</option>
                          <option value="invierno">invierno</option>
                          <option value="primavera">primavera</option>
                        </select>
                      </form>                      
                    </ul>       
                    </nav>
                    <section className="seasonTips hidden">
                    <p >lo mejor que ver y hacer:
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, qui dignissimos? Dolores, maxime provident mollitia vitae cupiditate odio distinctio sint dolorem iusto exercitationem cumque illo sapiente. Nisi similique dolorum assumenda.</p>
                    </section>                    
           
                  
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