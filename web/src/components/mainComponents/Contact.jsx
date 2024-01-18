import "../../styles/contact.scss";
import { Link } from "react-router-dom";


function Contact() {
  return (
    <>
    <div className="contactDiv">
      <section className="contactSpace">    
      <p className="myContact">
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
          <p>Contáctanos para cualquier consulta</p>
          
       </section>
      
      
    </div>
    <Link to="/" className="backToMain">
    <i className="fa-solid fa-left-long"></i> Back
  </Link>
  </>
  );
}

export default Contact;
