import "../styles/App.scss";
// import ls from './services/localStorage';

import { Routes, Route, Link } from "react-router-dom";

import moni1 from "../images/moni1.png";
import moni2 from "../images/moni2.png";
import moni3 from "../images/moni3.png";
import moni4 from "../images/moni4.png";
import moni5 from "../images/moni5.png";
import moni6 from "../images/moni6.png";

import Fauna from "./pageComponents/Fauna";
import Forests from "./pageComponents/Forests";
import Users from "./pageComponents/Users";

function App() {
  return (
    <>
      <header className="header">
        <section className="headerSection">
          <div>
            <h1>ENTRE BOSQUES y PUEBLOS</h1>
          </div>
          <form className="formHeader" action="">
            <label htmlFor="estacion">
              elije en que estacion del año nos visitas
            </label>
            <select id="estacion" name="select">
              <option value="">elige estacion</option>
              <option value="verano">verano</option>
              <option value="otoño">otoño</option>
              <option value="invierno">invierno</option>
              <option value="primavera">primavera</option>
            </select>

            <label htmlFor="hora">
              hora local
              <input type="time" id="hora" placeholder="nombre alrbol" />
            </label>

            <label htmlFor="fecha">
              fecha actual
              <input type="date" id="fecha" placeholder="" />
            </label>
          </form>
        </section>
      </header>

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <section className="sectionNav">
                  <nav>
                    <ul className="ulWiki">
                      <li>
                        {" "}
                        <a
                          className="aWiki"
                          href="https://es.wikipedia.org/wiki/Bosques_de_la_pen%C3%ADnsula_ib%C3%A9rica"
                          target="blank"
                        >
                          {" "}
                          hayedos{" "}
                        </a>{" "}
                      </li>
                      <li className="liWiki">
                        <a
                          className="aWiki"
                          href="https://es.wikipedia.org/wiki/Bosques_de_la_pen%C3%ADnsula_ib%C3%A9rica"
                          target="blank"
                        >
                          {" "}
                          robledales{" "}
                        </a>
                      </li>
                      <li className="liWiki">
                        {" "}
                        <a
                          className="aWiki"
                          href="https://es.wikipedia.org/wiki/Bosques_de_la_pen%C3%ADnsula_ib%C3%A9rica"
                          target="blank"
                        >
                          {" "}
                          bosque de castaños{" "}
                        </a>
                      </li>
                      <li className="liWiki">
                        {" "}
                        <a
                          className="aWiki"
                          href="https://es.wikipedia.org/wiki/Bosques_de_la_pen%C3%ADnsula_ib%C3%A9rica"
                          target="blank"
                        >
                          {" "}
                          bosque de madroños{" "}
                        </a>
                      </li>
                      <form>
                        <input
                          type="search"
                          name="q"
                          placeholder="Nombre planta"
                        />
                        <input type="submit" value="Buscar" />
                      </form>
                    </ul>
                  </nav>
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

                <section className="sectionsPictures">
                  <span className="aPictures"> <Link to="/pageComponents/forests">LOS BOSQUES</Link></span>
                  
                  <span className="aPictures"> <Link to= "/pageComponents/Fauna"> FAUNA </Link> </span>
                  <span className="aPictures"> <Link to="/pageComponents/Users">USUARIOS</Link></span>
                  <span className="aPictures">CREA TU TARJETA nueva</span>
              </section>

                <section className="sectionButtons">
                  <a
                    href="https://www.turismosierradefrancia.es/"
                    target="blank"
                  >
                    {" "}
                    <button className="btn1"> turismo sierra francia</button>
                  </a>

                  <a
                    href="http://www.hernandezrabal.com/espana/castillaleon/salamanca/penadefrancia.htm"
                    target="blank"
                  >
                    <button className="btn2"> ALGO DE HISTORIA</button>
                  </a>

                  <a
                    href="https://www.i-bejar.com/rutas/comarca/laguna-marcos-alberca.htm"
                    target="blank"
                  >
                    <button className="btn3"> LAGUNA SAN MARCOS</button>
                  </a>

                  <a
                    href="https://es.wikiloc.com/rutas-senderismo/bosque-de-madronos-miranda-del-castanar-84675005"
                    target="blank"
                  >
                    <button className="btn4">BOSQUE MADROÑOS</button>
                  </a>
                  <a
                    href="https://www.comunidad.madrid/servicios/urbanismo-medio-ambiente/ecosistemas-forestales"
                    target="blank"
                  >
                    Pistas par mi (comunidad madrid)
                  </a>

                  <blockquote cite="https://migueldeloyola.wordpress.com/2021/05/30/los-arboles-no-dejan-ver-el-bosque/#:~:text=Los%20%C3%A1rboles%20no%20dejan%20ver%20el%20bosque%20%E2%80%93%20Miguel%20de%20Loyola">
                    <p>
                      Nada más cierto eso de: los árboles no dejan ver el
                      bosque. Una frase acuñada por la experiencia de los
                      siglos, pero a la cual rara vez se echa manos al momento
                      de enfrentar algún asunto importante. La tendencia{" "}
                      <span className="highlight">
                        {" "}
                        generalizada en nuestro país, es a ir siempre por las
                        ramas, sin llegar jamás a tocar la raíz de los
                        problemas. El temor, los intereses, la apatía y
                        negligencia por llegar al fondo de las cosas impide una
                        solución definitiva. Nuestros legisladores, llamados
                        precisamente a solucionar los problemas que afectan a la
                        comunidad, se pierden en discusiones estériles{" "}
                      </span>{" "}
                      que no resuelven nada. Por el contrario, infectan las
                      heridas, agravan los problemas y los vuelven endémicos{" "}
                    </p>
                  </blockquote>
                  <p>
                    <q> Miguel de Loyola, </q> escritor chileno.{" "}
                  </p>

                  <p>
                    {" "}                    
                    <a
                      href="https://www.elcafedelahistoria.com/refranes-bosque/"
                      title="refranitos refranitos..."
                      target="blank"
                    >
                      ✅ Dichos y refranes acerca del bosque ✅{" "}
                    </a>{" "}
                  </p>
                </section>
                <section className="usersPictures">
                  <h3 className="h3Foro">Sube aqui tus fotos...</h3>
                  <p>
                    Elige tu fondo favorito o sube fotos de plantas, animales,
                    paisajes...
                  </p>
                  <div className="usersPhoto">
                    <img src={moni1} alt="" />
                    <img src={moni2} alt="" />
                    <img src={moni3} alt="" />
                    <img src={moni4} alt="" />
                    <img src={moni5} alt="" />
                    <img src={moni6} alt="" />
                    <img src={moni1} alt="" />
                    <img src={moni2} alt="" />
                    <img src={moni3} alt="" />
                    <img src={moni4} alt="" />
                    <img src={moni5} alt="" />
                    <img src={moni6} alt="" />
                  </div>
                </section>
                <section className="espacio">
                  <ul>
                    <li>animaciones</li>
                    <li>OPINIONES DE USUARIOS</li>
                    <li>enlaces de interés</li>
                  </ul>
                  <ul>
                    <li>venta / proveedores</li>
                    <li>rutas</li>
                    <li>info interesante</li>
                  </ul>
                </section>
                <p>
                  {" "}
                  <i className="fa-regular fa-paper-plane"></i>
                  Dudas y comentarios contactar con{" "}
                  <a href="mailto:virginia.alvarez82@gmail.com?&subject=Los forests de aqui al lao&body=ME ENCANTA EL VERDE">
                    {" "}
                    @LaVirWebForge2023{" "}
                  </a>{" "}
                </p>
              </>
            }
          />

          <Route path="/pageComponents/Fauna" element={<Fauna />}/>
          <Route path="/pageComponents/Forests" element={<Forests />}/>
          <Route path="/pageComponents/Users" element={<Users />}/>

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
