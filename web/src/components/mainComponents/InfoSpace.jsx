// import React from 'react'
import crow from "../../images/crow.gif"

function InfoSpace() {
  return (
    <div>
        <section className="infoSpace">
                  <div className="sectionButtons">
                    <a
                      href="https://www.turismosierradefrancia.es/"
                      target="blank"
                    >
                      {" "}
                      <button className="btn1"> TURISMO SIERRA DE FRANCIA</button>
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
                      href="https://www.turismoentresierras.com/las-piscinas-naturales-de-la-sierra-de-francia-2/"
                      target="blank"
                    >
                      {" "}
                      <button className="btn1">
                        PISCINAS NATURALES
                      </button>
                    </a>
                    {/* <a
                      href="https://www.comunidad.madrid/servicios/urbanismo-medio-ambiente/ecosistemas-forestales"
                      target="blank"
                    >
                      {" "}
                      <button className="btn1">
                        Pistas par mi (comunidad madrid)
                      </button>
                    </a> */}
                  </div>

                  <div className="cite">
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
                          negligencia por llegar al fondo de las cosas impide
                          una solución definitiva. Nuestros legisladores,
                          llamados precisamente a solucionar los problemas que
                          afectan a la comunidad, se pierden en discusiones
                          estériles{" "}
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
                        🍂 Dichos y refranes del bosque 🍂{" "}
                      </a>{" "}
                    </p>
                  </div>
                  <p className="crow" ><img className="crowGif" src={crow} alt="" /></p>
                </section>
    </div>
  )
}

export default InfoSpace