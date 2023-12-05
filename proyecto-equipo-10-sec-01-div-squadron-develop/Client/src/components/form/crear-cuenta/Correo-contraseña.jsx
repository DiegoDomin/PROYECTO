import Label from "../../label/Label";
import { Validation } from "../../../assets/Validation/validaciones/Validation";
import { useLocalStorage } from "../../../assets/Validation/validaciones/useLocalStorage";
import { useState } from "react";
import icon_eye_password from "../../../assets/icons/icon-eye-password.png"
import icon_close_password from "../../../assets/icons/icon-close-password.png"
function Correo_contraseña() {
  const initialForm = {
  
    correo_u: '',
    password: '',
  };

  const [showPass, setShowPass] =useState(false); 
  

 // Usando el hook useLocalStorage
 const [storedForm] = useLocalStorage("CrearCuenta", initialForm);

 // Uso del componente Validation con el hook useLocalStorage
 const { form, errors, handleChange, handleBlur } = Validation(
   storedForm,
   "CrearCuenta"       );
    
  return (
      <div className="input-form-discapacidad">
        <h2 className="text-title-form-inputs">
          Correo Electronico y contraseña
        </h2>

        {/* nombres */}
        <Label text_label={"Correo Electronico"} htmlFor={"correoElectronico"} />

        <input
          type="email"
          name="correo_u"
          placeholder="Ej. usuario1@gmai.com"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.correo_u}
          required
          id="correoElectronico"
        />
        {errors.correo_u && (
          <p className="p-text-form-error">{errors.correo_u}</p>
        )}

        <Label text_label={"Contraseña"} htmlFor={"contrasena"} />
        <section className="container-password">
      <input type={showPass ?"text":"password"} name="password" placeholder="Ej. Usu@r1o12." id="contrasena"  onChange={handleChange}
          onBlur={handleBlur}
          value={form.password}
          required
        
          />
      {showPass ? <img src={icon_close_password} className="icon-eye-password" onClick={()=>setShowPass(!showPass)}/>:<img src={icon_eye_password} className="icon-eye-password" onClick={()=>setShowPass(!showPass)}/> }
</section>
        
 {errors.password && (
          <p className="p-text-form-error">{errors.password}</p>
        )}
      
        
      </div>
  );
}
export default Correo_contraseña;