import Header from "../components/header-visitant/Header";
import Wizard from "../components/wizard/wizard";
import Iniciar_sesion from "../components/form/iniciar-sesion/Iniciar-sesion";
import icon_iniciar_sesion from "../assets/icons/icon-iniciar-sesion.png";
import icon_i_sesion  from "../assets/icons/icon-inicar-sesion.png";
import fondo_form2 from "../assets/img/fondo-form2.jpg"

function Iniciarsesion() {
    const steps = ["Iniciar sesion"];

  return (
    <>
      <Header />
      <Wizard 
      backgroundImage={fondo_form2}
      img2={icon_i_sesion}
      des1={"Bienvenido a Mirame, sera un gusto poder ayudarte, si ya tienes una cuenta inicia sesion"}
      steps={steps}
      photo={icon_iniciar_sesion}
      title={"Iniciar sesion"} 
      PAGES1={<Iniciar_sesion />} 
        opcion={"Iniciar Sesion"}
        lugarOpcion={"/reportar-caso-usuario"}
      />

    </>
  );
}

export default Iniciarsesion;
