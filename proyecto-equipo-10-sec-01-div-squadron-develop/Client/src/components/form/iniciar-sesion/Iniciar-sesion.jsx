import Label from "../../label/Label";
import icon_eye_password from "../../../assets/icons/icon-eye-password.png"
import icon_close_password from "../../../assets/icons/icon-close-password.png"
import { NavLink } from "react-router-dom";
import { Validation } from "../../../assets/Validation/validaciones/Validation";
import { useLocalStorage } from "../../../assets/Validation/validaciones/useLocalStorage";
import { useState } from "react";
function Iniciar_sesion(){

  const initialForm = {
    correoElectronicoI: "",
    contrasenaI: "",
  };

  const [showPass, setShowPass] =useState(false);

 // Usando el hook useLocalStorage
 const [storedForm] = useLocalStorage("CrearCuentaForm", initialForm);

 // Uso del componente Validation con el hook useLocalStorage
 const { form, errors, handleChange, handleBlur } = Validation(
   storedForm,
   "CrearCuentaForm"
 );

 



    return(
  
      <div className="input-form-discapacidad">
        <h2 className="text-title-form-inputs">Correo Electronico y contraseña</h2>

        {/* nombres */}
      <Label text_label={"Correo Electronico"} htmlFor={"correo"}/>

      <input type="email" name="correoElectronicoI" placeholder="Ej. usuario1@gmai.com" id="correo" onChange={handleChange} onBlur={handleBlur}    value={form.correoElectronicoI}
/>
{errors.correoElectronicoI && (
          <p className="p-text-form-error">{errors.correoElectronicoI}</p>
        )}

      <Label text_label={"Contraseña"} htmlFor={"contrasena"}/>

      <section className="container-password">
      <input type={showPass ?"text":"password"} name="contrasenaI" placeholder="Ej. Usu@r1o12." id="contrasena" value={form.contrasenaI}/>
      {showPass ? <img src={icon_close_password} className="icon-eye-password" onClick={()=>setShowPass(!showPass)}/>:<img src={icon_eye_password} className="icon-eye-password" onClick={()=>setShowPass(!showPass)}/>}
</section>
  {errors.contrasenaI && (
          <p className="p-text-form-error">{errors.contrasenaI}</p>
        )}
      <NavLink to="/crear-cuenta" className="question-create-account">
        ¿Aun no tienes cuenta?Crea una cuenta aca
      </NavLink>

    
</div>
     
    )
} 
export default Iniciar_sesion