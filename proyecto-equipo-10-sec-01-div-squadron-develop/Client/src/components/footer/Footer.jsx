import { useState } from "react";
import icon_ig from "../../assets/icons/icon-ig.png";
import icon_fb from "../../assets/icons/icon-fb.png";
import Logo_Footer from "../../assets/img/logo.png";

const Footer = () => {
  const [link] = useState(
    "https://www.instagram.com/invites/contact/?i=25xlpj945ey&utm_content=t5ew9dp"
  );

  const handleInstagramClick = () => {
    window.location.href = link;
  };

  const [link2] = useState(
    "https://www.facebook.com/profile.php?id=61554028296263"
  );

  const handleFacebooklick = () => {
    window.location.href = link2;
  };

  return (
    <footer>
      <figure className="container">
        <img src={Logo_Footer} alt="Logo Footer" className="imgF" />
      </figure>

      <section className="linea"></section>
      <h2 className="title-footer">Puedes contactarnos :</h2>

      <div className="contactos">
        <div>
          <p className="MIRAME">MIRAME</p>
          <p className="center">svmirame@gmail.com</p>
        </div>
        <div>
          <p className="PNC">POLICIA NACIONAL CIVIL</p>
          <p className="center">991</p>
        </div>
        <div>
          <p className="Fiscalia">SERVICIOS FISCALIA GENERAL DE LA REPUBLICA</p>
          <p className="center">2593-7000</p>
        </div>
      </div>
      <div className="derechos">
        <p>&copy; Mirame 2023. All rights reserved</p>
        <div className="redes_sociales">
          <figure>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleInstagramClick}
            >
              <img src={icon_ig} alt="Logo Footer" className="redes_sociales" />
            </a>
           
            
          </figure>
          <figure>
          <a
              href={link2}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleFacebooklick }
            >
              <img src={icon_fb} alt="Logo Footer" className="redes_sociales" />
            </a>
          
            
          </figure>
        </div>
      </div>
    </footer>
  );
};

export default Footer;