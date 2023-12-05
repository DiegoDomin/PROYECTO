import Datos_personales_usuario_registrado from "../../components/form/form-reportar-caso/Datos-personales";
import Caracteristicas_fisicas_usuario_registrado from "../../components/form/form-reportar-caso/Caracteristicas-fisicas";
import Discapacidad from "../../components/form/form-reportar-caso/Discapacidad";
import Vestimenta from "../../components/form/form-reportar-caso/Vestimenta";
import Fecha_hora from "../../components/form/form-reportar-caso/Fecha-hora";
import Ultimo_lugar from "../../components/form/form-reportar-caso/Ultimo-lugar";
import icon_CF_report_wizard from "../../assets/icons/icon-CF-report-wizard.png";
import icon_DP_report_wizard from "../../assets/icons/icon-DP-report-wizard.png";
import icon_DF_report_wizard from "../../assets/icons/icon-DF-wizard.png"
import icon_V_report_wizard from "../../assets/icons/icon-V-wizard.png";
import icon_FH_report_wizard from "../../assets/icons/icon-FH-wizard.png";
import icon_P_report_wizard from "../../assets/icons/icon-reporte-form.png";
import icon_ULV_report_wizard from  "../../assets/icons/icon-ULV-wizard.png";
import fondo_form3 from "../../assets/img/fondo-form3.jpg";
import Fotografia_usuario_registrado from "../../components/form/form-reportar-caso/Fotografia";
import FormularioReporte from "../../components/form/form-reportar-caso/FormReport";
import Wizard from "../../components/wizard/wizard";
import Header_usuario_registrado from "../../components/header-usuario-registrado/Header";

function Form_reportar() {
  const steps = [
    "Datos personales",
    "Caracteristicas Fisicas",
    "Discapacidad",
    "Vestimenta",
    "Fecha y hora",
    "Lugar visto por ultima vez",
    "Fotografia",
    "Envio de datos"
  ];
  return (
    <>
    <Header_usuario_registrado />
    <Wizard
      steps={steps}
      backgroundImage={fondo_form3}
      PAGES1={<Datos_personales_usuario_registrado />}
      PAGES2={<Caracteristicas_fisicas_usuario_registrado />}
      PAGES3={<Discapacidad />}
      PAGES4={<Vestimenta />}
      PAGES5={<Fecha_hora />}
      PAGES6={<Ultimo_lugar />}
      PAGES7={<Fotografia_usuario_registrado />}
      PAGES8={<FormularioReporte />}
      des1={"Ingrese los datos personales de la persona desaparecida"}
      des2={"Ingrese las caracteristicas fisicas de la persona desaparecida, usando un correcto lenguaje, respentando los espacios"}
      des3={"Indique las discapacidades que posea, en caso de no poseer omita este paso"}
    des4={"Ingrese la vestimenta que llevaba puesta cuando fue por ultima vez visto"}
    des5={"Ingrese la fecha y hora estimada que fue visto por ultima vez"}
    des6={"Ingrese detalladamante el lugar donde fue visto ya que apartir de este dato es donde se ubicara en el mapa"}
    des7={"Para finalizar el formulario, aceptar las condiciones y subir la fotografia, recuerde de cumplir con los requisitos para una mejor experiencia "}
      
      img1={icon_DP_report_wizard}
      img2={icon_CF_report_wizard}
      img3={icon_DF_report_wizard}
      img4={icon_V_report_wizard}
      img5={icon_FH_report_wizard}
      img6={icon_ULV_report_wizard}
      photo={icon_P_report_wizard}
      opcion={"Enviar Formulario"}
      lugarOpcion={"/instructivo-usuario"}
    />
    </>
  );
}
export default Form_reportar;
