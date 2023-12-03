

import Resumen from "../../components/form/Resumen-form/Resumen";
import icon_CF_report_wizard from "../../assets/icons/icon-CF-report-wizard.png";
import icon_DP_report_wizard from "../../assets/icons/icon-DP-report-wizard.png";
import icon_DF_report_wizard from "../../assets/icons/icon-DF-wizard.png"
import icon_V_report_wizard from "../../assets/icons/icon-V-wizard.png";
import icon_FH_report_wizard from "../../assets/icons/icon-FH-wizard.png";
import icon_P_report_wizard from "../../assets/icons/icon-reporte-form.png";
import icon_ULV_report_wizard from  "../../assets/icons/icon-ULV-wizard.png";
import fondo_form3 from "../../assets/img/fondo-form3.jpg";
import Wizard from "../../components/wizard/wizard";
import Header_usuario_registrado from "../../components/header-usuario-registrado/Header";
import Resumen2 from "../../components/form/Resumen-form/Resumen2";
import Resumen3 from "../../components/form/Resumen-form/Resumen3";
function EditarFormulario(){
    const steps = [
        "Datos personales",
        "Caracteristicas Fisicas"
      ];

    return(
        <>
        <Header_usuario_registrado />
        <Wizard
          steps={steps}
          backgroundImage={fondo_form3}
          PAGES1={<Resumen formKey={"DatosPersonalesReportar"}/> }
          PAGES2={<Resumen2 formKey={"CaracterististicasFisicasReportar"} />}
          PAGES3={<Resumen3 formKey={"DiscapacidadReportar"}/>}
          des1={"Ingrese los datos personales de la persona desaparecida"}
        
          
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
    )
}

export default EditarFormulario