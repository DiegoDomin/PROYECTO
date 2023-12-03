import Label from "../../label/Label";
import { Validation } from "../../../assets/Validation/validaciones/Validation";
import { useLocalStorage } from "../../../assets/Validation/validaciones/useLocalStorage";
import { useState } from "react";
import icon_eye_password from "../../../assets/icons/icon-eye-password.png"
import icon_close_password from "../../../assets/icons/icon-close-password.png"
function Correo_contraseña() {
  const initialForm = {
    correoElectronico: "",
    contrasena: "",
    contrasena2: "",

  };

  const [showPass, setShowPass] =useState(false);
  const [showPass2, setShowPass2] =useState(false);

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
          name="correoElectronico"
          placeholder="Ej. usuario1@gmai.com"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.correoElectronico}
          required
          id="correoElectronico"
        />
        {errors.correo && (
          <p className="p-text-form-error">{errors.correo}</p>
        )}

        <Label text_label={"Contraseña"} htmlFor={"contrasena"} />
        <section className="container-password">
      <input type={showPass ?"text":"password"} name="contrasena" placeholder="Ej. Usu@r1o12." id="contrasena"  onChange={handleChange}
          onBlur={handleBlur}
          value={form.contrasena}
          required
        
          />
      {showPass ? <img src={icon_close_password} className="icon-eye-password" onClick={()=>setShowPass(!showPass)}/>:<img src={icon_eye_password} className="icon-eye-password" onClick={()=>setShowPass(!showPass)}/> }
</section>
        
 {errors.contrasena && (
          <p className="p-text-form-error">{errors.contrasena}</p>
        )}
        
        <Label text_label={"Confirmar contraseña"} htmlFor={"contrasena2"} />

        <section className="container-password">
      <input type={showPass2 ?"text":"password"} name="contrasena2" placeholder="Ej. Usu@r1o12." id="contrasena2"  onChange={handleChange}
          onBlur={handleBlur}
          value={form.contrasena2}
          required
        
          />
      {showPass2 ? <img src={icon_close_password} className="icon-eye-password" onClick={()=>setShowPass2(!showPass2)}/>:<img src={icon_eye_password} className="icon-eye-password" onClick={()=>setShowPass2(!showPass2)}/> }
</section>

 {errors.contrasena2 && (
          <p className="p-text-form-error">{errors.contrasena2}</p>
        )}
        
      </div>
  );
}
export default Correo_contraseña;
