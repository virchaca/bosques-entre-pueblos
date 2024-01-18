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
      
      <section className="formSection">
        <h4>Mediante formulario</h4>
        <form action="https://formsubmit.co/e304ce9ec8898c2d635b585601a5787f" method="POST" className="form" > 
          {/* <label htmlFor="name" >Nombre</label> */}
          <input className="input" type="text" name="name" placeholder="Nombre"/>

          {/* <label htmlFor="email">Correo electrónico</label> */}
          <input className="input" type="email" name="email" placeholder="Email"/>

          {/* <label htmlFor="subject">Asunto</label> */}
          <input className="input" type="text" name="subject" placeholder="Asunto"/>

          {/* <label htmlFor="message">Mensaje</label> */}
          <textarea className="textarea" name="message" id="" cols="15" rows="5" placeholder="Escribe aquí tu mensaje"></textarea>

          <input className="btnSubmit" type="submit" value={"enviar"} />

          <input type="hidden" name="_next" value="http://localhost:5173/bosques-entre-pueblos/?name=&email=&subject=&message=#/contact" />
          <input type="hidden" name="_captcha" value="false" />
        </form>
      </section>
      
      
    </div>
    <Link to="/" className="backToMain">
    <i className="fa-solid fa-left-long"></i> Back
  </Link>
  </>
  );
}

export default Contact;
