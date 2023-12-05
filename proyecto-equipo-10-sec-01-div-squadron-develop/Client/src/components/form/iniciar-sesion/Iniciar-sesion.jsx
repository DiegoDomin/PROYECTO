import Label from "../../label/Label";
import icon_eye_password from "../../../assets/icons/icon-eye-password.png"
import icon_close_password from "../../../assets/icons/icon-close-password.png"
import { NavLink } from "react-router-dom";
import { Validation } from "../../../assets/Validation/validaciones/Validation";
import { useLocalStorage } from "../../../assets/Validation/validaciones/useLocalStorage";
import { useState } from "react";
import { login} from "../../../services/form.service";
import { useNavigate } from "react-router-dom";
function Iniciar_sesion(){

  const initialForm = {
    correo_u: "",
    password: "",
  };
const navigate=useNavigate()
  const [showPass, setShowPass] =useState(false);

 // Usando el hook useLocalStorage
 const [storedForm, setStoredForm] = useLocalStorage("formData", initialForm);

 // Uso del componente Validation con el hook useLocalStorage
 const { form, errors, handleChange, handleBlur } = Validation(
   storedForm,
   "formData"
 );



 const handleLogin = async (e) => {
  e.preventDefault();

  // Llamar a la función de inicio de sesión
  const token = await login(form.correo_u, form.password);

  if (token) {
    // Aquí puedes manejar el éxito del inicio de sesión
    console.log("Inicio de sesión exitoso. Token:", token);

    // Borrar el contenido del localStorage
    setStoredForm(initialForm);

    // Redireccionar a la página después del inicio de sesión
    navigate("/reportar-caso-usuario");
  } else {
    // Aquí puedes manejar el fallo del inicio de sesión
    console.log("Inicio de sesión fallido. Verifica las credenciales.");
  }
};
    return(

      <div className="input-form-inicio-sesion">
            <form onSubmit={handleLogin}>

        <h2 className="text-title-form-inputs">Correo Electronico y contraseña</h2>

        {/* nombres */}
      <Label text_label={"Correo Electronico"} htmlFor={"correo"}/>

      <input type="email" name="correo_u" placeholder="Ej. usuario1@gmai.com" id="correo" onChange={handleChange} onBlur={handleBlur}    value={form.correo_u}
/>
{errors.correo_u && (
          <p className="p-text-form-error">{errors.correo_u}</p>
        )}

      <Label text_label={"Contraseña"} htmlFor={"contrasena"}/>

      <section className="container-password">
      <input
  type={showPass ? "text" : "password"}
  name="password"
  placeholder="Ej. Usu@r1o12."
  id="contrasena"
  onChange={handleChange} // Agrega el evento onChange
  onBlur={handleBlur}
  value={form.password}
/>

{showPass ? (
  <img
    src={icon_close_password}
    className="icon-eye-password"
    onClick={() => setShowPass(!showPass)}
    alt="Cerrar ojo de contraseña"
  />
) : (
  <img
    src={icon_eye_password}
    className="icon-eye-password"
    onClick={() => setShowPass(!showPass)}
    alt="Mostrar contraseña"
  />
)}
</section>

{errors.password && (
  <p className="p-text-form-error">{errors.password}</p>
)}
      <NavLink to="/crear-cuenta" className="question-create-account">
        ¿Aun no tienes cuenta?Crea una cuenta aca
      </NavLink>

    <button type="submit">Iniciar sesion</button>
     </form>
</div>
    )
} 
export default Iniciar_sesion