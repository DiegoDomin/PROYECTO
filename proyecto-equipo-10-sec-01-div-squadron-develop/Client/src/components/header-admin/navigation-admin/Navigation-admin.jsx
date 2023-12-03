import { NavLink } from "react-router-dom";
import iconHome from "../../../assets/icons/icon-home.png";
import iconInstruct from "../../../assets/icons/icon-instruct.png";

import iconHamburguesa from "../../../assets/icons/icon-hamburguesa.png";
import iconX from "../../../assets/icons/icon-X.png";
import perfilFoto from "../../../assets/img/img-perfil.png"

import { useState } from "react";
function NavigationAD() {
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
      
            {/* Lista de navegación */}
            <ul className={`content-nav ${menuOpen ? "open" : ""}`}>
            <li >
              <img src={iconX} alt="icon-cerrar" className="icon-cerrar" onClick={closeMenu}/>

              </li>
           

              <li className="container-icon-perfil-hamburguer">
              <img src={perfilFoto} alt="icon-cerrar" className="icon-perfil-hamburguer"/><NavLink to="/crear-cuenta" className="text-nav-perfil">Crear cuenta </NavLink> 
              </li>
              <NavLink to="/" className="text-nav" onClick={closeMenu}>
                INICIO
                <img src={iconHome} className="icon" />
              </NavLink>
              <NavLink to="/instructivo" className="text-nav" onClick={closeMenu}>
                Actualizar Reporte
                <img src={iconInstruct} className="icon" />
              </NavLink>
              
              

            </ul>
          </nav>
        );
      }
      export default NavigationAD