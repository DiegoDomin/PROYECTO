import { NavLink } from "react-router-dom";
import iconHome from "../../../assets/icons/icon-home.png";
import iconInstruct from "../../../assets/icons/icon-instruct.png";
import iconPf from "../../../assets/icons/icon-pf.png";
import iconQs from "../../../assets/icons/icon-qs.png";
import iconrc from "../../../assets/icons/icon-rc.png";

import iconHamburguesa from "../../../assets/icons/icon-hamburguesa.png";
import iconX from "../../../assets/icons/icon-X.png";
import perfilFoto from "../../../assets/img/img-perfil.png"
import { useState } from "react";
function Navigation_usuario_registrado() {
    const [menuOpen, setMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
      document.body.classList.toggle('menu-open', !menuOpen);

      
    };
  
    const closeMenu = () => {
      setMenuOpen(false);
      document.body.classList.remove('menu-open');

    };
  return (
    
    <nav>
      {/* Botón de hamburguesa */}
      <div className="menu-toggle" onClick={toggleMenu}>
              <div className="menu-icon">
              <img src={menuOpen ? iconHamburguesa : iconHamburguesa} className="icon-hamburguesa" alt="icon-hamburguesa" />
              </div>
            </div>
            
            
            <ul className={`content-nav ${menuOpen ? "open" : ""}`}>
            <li >
              <img src={iconX} alt="icon-cerrar" className="icon-cerrar" onClick={closeMenu}/>

              </li>
              <li className="container-icon-perfil-hamburguer">
              <img src={perfilFoto} alt="icon-cerrar" className="icon-perfil-hamburguer"/><NavLink to="/crear-cuenta" className="text-nav-perfil">nombre de usuario </NavLink> 
              </li>
        <NavLink to="/inicio-usuario" className="text-nav">
          INICIO
          <img src={iconHome} className="icon" />
        </NavLink>
        <NavLink to="/instructivo-usuario" className="text-nav">
          INSTRUCTIVO
          <img src={iconInstruct} className="icon" onClick={closeMenu}/>
        </NavLink>
        <NavLink to="/reportar-caso-usuario" className="text-nav" onClick={closeMenu}>
          REPORTAR CASO
          <img src={iconrc} className="icon" />
        </NavLink>
        <NavLink to="/preguntas-frecuentes-usuario" className="text-nav" onClick={closeMenu}>
          PREGUNTAS FRECUENTES
          <img src={iconPf} className="icon" />
        </NavLink>
        <NavLink to="/quienes-somos-usuario" className="text-nav" onClick={closeMenu}>
          QUIENES SOMOS
          <img src={iconQs} className="icon" />
        </NavLink>
        <NavLink to="/" className="text-cerrar-sesion" > Cerrar Sesion</NavLink>

      </ul>
     
    </nav>
  );
}

export default Navigation_usuario_registrado;
