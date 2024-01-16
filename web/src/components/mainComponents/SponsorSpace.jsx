// import React from 'react'
import "../../styles/sponsorSpace.scss";
// import { Link } from "react-router-dom";

function SponsorSpace() {
  return (
    <div className="sponsorDiv">
      <section className="sponsorSpace">        
          <p>Contáctanos para cualquier consulta sobre temas relacionados, como:</p>
          {/* <li>Animaciones</li> */}      
          <p>- Cursos y otro contenido de interés </p>
          <p>- Venta de productos artesanales</p>
          <p>- Rutas y turismo por la zona</p>     
       </section>
      <p className="contact">
        {" "}
        <i className="fa-regular fa-paper-plane"></i>
        Contacto{" "}
        <a
          href="mailto:virginia.alvarez82@gmail.com?&subject=Bosques Entre Pueblos - Contacto &body=Hola Vir,
                  "
                  title="virginia.alvarez82@gmail.com"
        >
          {" "}
          @VirWebCreations{" "}
        </a>{" "}
      </p>
      {/* <Link to="/" className="backToMain">
        <i className="fa-solid fa-left-long"></i> Back
      </Link> */}
    </div>
  );
}

export default SponsorSpace;
