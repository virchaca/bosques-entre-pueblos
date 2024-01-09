// import React from 'react'

function SponsorSpace() {
  return (
    <div className="sponsorDiv">
      <section className="sponsorSpace">
        <ul>
          <span>Sección en construccion...</span>
          <li>Animaciones</li>
          <li>Opiniones de usuarios</li>
          <li>Enlaces de interés</li>
        </ul>
        <ul>
          <li>Venta / proveedores de productos artesanales</li>
          <li>Rutas y deportes de aventura</li>
          <li>Cursos y otra info interesante</li>
        </ul>
      </section>
      <p className="contact">
        {" "}
        <i className="fa-regular fa-paper-plane"></i>
        Contacto{" "}
        <a
          href="mailto:virginia.alvarez82@gmail.com?&subject=Inventario Plantas Sierra - Contacto &body=Muy buenos días Vir,
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
