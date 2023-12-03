import Header from "../components/header-visitant/Header";
import Datos_personales from "../components/form/crear-cuenta/Datos-personales";
import Wizard from "../components/wizard/wizard";
import icon_CC_wizard from "../assets/icons/icon-CC-wizard.png";
import icon_DP_wizard from "../assets/icons/icon-DP-wizard.png";
import fotoCreateAccount from "../assets/img/create-account.png";
import icon_DP_report_wizard from "../assets/icons/icon-DP-report-wizard.png";
import fondo_form from "../assets/img/fondo-form.jpg";
import Informacion_extra from "../components/form/crear-cuenta/Informacion-extra";
import Correo_contraseña from "../components/form/crear-cuenta/Correo-contraseña";
function Crearcuenta() {
  const steps = ["Datos Personales","Información Extra", "Correo y Contraseña"];
  return (
    <>
      <Header />

      <Wizard
      backgroundImage={fondo_form}
      photo={fotoCreateAccount}
        steps={steps}
        des1={"Ingresa tus datos personales y rellena el formulario correctamente, da click si ya tiene una cuenta"}
        des2={"Ingrese datos extra que nos sera de ayuda para cualquier emergencia"}
        des3={"Ingresa un correo y una contraseña que este activa actualmente y la utilices ya que sera el medio por el cual le comunicaremos sobre cualquiera novedad"}
        title={"Crear Cuenta"}
        img1={icon_DP_report_wizard}
        img2={icon_DP_wizard}
        img3={icon_CC_wizard}
        PAGES1={<Datos_personales /> } 
        PAGES2={<Informacion_extra />}
        PAGES3={<Correo_contraseña />}
        lugarOpcion={"/reportar-caso-usuario"}
        opcion={"Registrarse"}
      />
    </>
  );
}

export default Crearcuenta;
