// import React from 'react'
import "../../styles/sponsorSpace.scss";

function SponsorSpace() {
  return (
    <div className="sponsorDiv">
      <section className="sponsorSpace">
        <ul>
          <span>Proximamente en esta sección enlaces sobre:</span>
          {/* <li>Animaciones</li> */}      
          <li>Cursos y otro contenido de interés </li>
        </ul>
        <ul>
          <li>Venta de productos artesanales</li>
          <li>Rutas y deportes de aventura</li>
        
        </ul>
      </section>
      <p className="contact">
        {" "}
        <i className="fa-regular fa-paper-plane"></i>
        Contacto{" "}
        <a
          href="mailto:virginia.alvarez82@gmail.com?&subject=Bosques Entre Pueblos - Contacto &body=Hola Vir,
                  "
        >
          {" "}
          @VirWebCreations{" "}
        </a>{" "}
      </p>
    </div>
  );
}

export default SponsorSpace;
