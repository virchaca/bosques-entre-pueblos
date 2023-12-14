// import React from 'react'

function SponsorSpace() {
  return (
    <div className="sponsorDiv">
      <section className="sponsorSpace">
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
