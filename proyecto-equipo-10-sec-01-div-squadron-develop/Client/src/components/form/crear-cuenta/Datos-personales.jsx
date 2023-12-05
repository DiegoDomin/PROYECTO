import { NavLink } from "react-router-dom";
import Label from "../../label/Label";
import { Validation } from "../../../assets/Validation/validaciones/Validation";
import { useLocalStorage } from "../../../assets/Validation/validaciones/useLocalStorage";
function Datos_personales() {
  //se configura los valores iniciales
  const initialForm = {
    name: "",
    lastName: "",
    date: "",
    dui: "",
  };


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
      <Label text_label={"Nombres"} htmlFor={"name"} />
      <input
        type="text"
        name="name"
        placeholder="Ej. Marcos Jose"
        onChange={handleChange}
        onBlur={handleBlur}
        value={form.name}
        required
        id="name"
      />
      {errors.name && <p className="p-text-form-error">{errors.name}</p>}
      {/* Apellidos */}
      <Label text_label={"Apellidos"} htmlFor={"lastName"} />
      <input
        type="text"
        name="lastName"
        placeholder="Ej. Martines Rivas"
        onChange={handleChange}
        onBlur={handleBlur}
        value={form.lastName}
        required
        id="lastName"
      />
      {errors.lastName && <p className="p-text-form-error">{errors.lastName}</p>}

      {/* fecha de nacimiento */}
      <Label text_label={"Fecha de nacimiento"} htmlFor={"date"} />
      <input
        type="date"
        name="date"
        onChange={handleChange}
        onBlur={handleBlur}
        value={form.date}
        required
        id="date"
      />
      {errors.date && <p className="p-text-form-error">{errors.date}</p>}

      {/* dui */}
      <Label text_label={"DUI"} htmlFor={"dui"} />

      <input
        type="text"
        name="dui"
        placeholder="Ej. 06667522-0"
        onChange={handleChange}
        onBlur={handleBlur}
        value={form.dui}
        required
        id="dui"
      />
      {errors.dui && <p className="p-text-form-error">{errors.dui}</p>}
      {/* btn-atras */}
      <NavLink to="/iniciar-sesion" className="question-account">
        ¿Ya tienes cuenta?Inicia sesión aca
      </NavLink>



    </div>


  );
}
export default Datos_personales;