import { NavLink } from "react-router-dom";
import Label from "../../label/Label";
import { Validation } from "../../../assets/Validation/validaciones/Validation";
import { useLocalStorage } from "../../../assets/Validation/validaciones/useLocalStorage";
function Datos_personales() {
  //se configura los valores iniciales
  const initialForm = {
    name_u: '',
    lastName_u: '',
    fechaNacimiento_u: '',
    dui_u: ''
  };

      // Define tus campos aquí

 // Usando el hook useLocalStorage
 const [storedForm] = useLocalStorage("CrearCuenta", initialForm);
 // Uso del componente Validation con el hook useLocalStorage
 const { form, errors, handleChange, handleBlur } = Validation(
  
   storedForm,
   "CrearCuenta"
 );


  return (
      <div className="input-form-datos-personales-crear-cuenta">
        <h2 className="text-title-form-inputs">Tu Informacion Personal</h2>

        {/* nombres */}
        <Label text_label={"Nombres"} htmlFor={"name"}/>
        <input
          type="text"
          name="name_u"
          placeholder="Ej. Marcos Jose"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.name_u}
          required
          id="name"
        />
  {errors.name_u && <p className="p-text-form-error">{errors.name_u}</p>}
        {/* Apellidos */}
        <Label text_label={"Apellidos"} htmlFor={"lastName"} />
        <input
          type="text"
          name="lastName_u"
          placeholder="Ej. Martines Rivas"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.lastName_u}
          required
          id="lastName"
        />
          {errors.lastName && <p className="p-text-form-error">{errors.lastName}</p>}

        {/* fecha de nacimiento */}
        <Label text_label={"Fecha de nacimiento"} htmlFor={"date"}/>
        <input
          type="date"
          name="fechaNacimiento_u"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.fechaNacimiento_u}
          required
          id="date"
        />
          {errors.fechaNacimiento_u && <p className="p-text-form-error">{errors.fechaNacimiento_u}</p>}

        {/* dui */}
        <Label text_label={"DUI"} htmlFor={"dui"}/>

        <input
          type="text"
          name="dui_u"
          placeholder="Ej. 06667522-0"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.dui_u}
          required
          id="dui"
        />
        {errors.dui_u && <p className="p-text-form-error">{errors.dui_u}</p>}
  {/* btn-atras */}
  <NavLink to="/iniciar-sesion" className="question-account">
        ¿Ya tienes cuenta?Inicia sesión aca
      </NavLink>



      </div>

    
  );
}
export default Datos_personales;
