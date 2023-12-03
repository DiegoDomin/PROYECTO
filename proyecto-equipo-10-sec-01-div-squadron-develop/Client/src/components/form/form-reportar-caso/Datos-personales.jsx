import Label from "../../label/Label";
import { Validation } from "../../../assets/Validation/validaciones/Validation";
import { useLocalStorage } from "../../../assets/Validation/validaciones/useLocalStorage"; // Ajusta la ruta según tu estructura de archivos
function Datos_personales_usuario_registrado() {
  // Se configuran los valores iniciales de los inputs
  const initialForm = {
    nameReport: "",
    lastNameReport: "",
    fechaNacimiento: "",
  };

  // Función de validaciones del formulario
 
  // Usando el hook useLocalStoragex
  const [storedForm] = useLocalStorage("DatosPersonalesReportar",initialForm);

  // Uso del componente Validation con el hook useLocalStorage
  const { form, errors, handleChange, handleBlur } = Validation(
    storedForm,
    "DatosPersonalesReportar"
              );

       
  return (
    <div className="input-form-datos-personales">
      <h2 className="text-title-form-inputs">Datos Personales</h2>
      {/* nombres */}
      <Label text_label={"Nombres"} htmlFor={"name2"} />
      <input
        type="text"
        name="nameReport"
        placeholder="Ej. Marcos Jose"
        onChange={handleChange}
        onBlur={handleBlur}
        value={form.nameReport}
        required
        id="name2"
      />
      {/* Muestra el mensaje de error debajo del input, no dentro del mismo */}
      {errors.nameReport && <p className="p-text-form-error">{errors.nameReport}</p>}

      {/* apellidos */}
      <Label text_label={"Apellidos"} htmlFor={"lastname2"} />
      <input
        type="text"
        name="lastNameReport"
        placeholder="Ej. Martinez Rivas"
        onChange={handleChange}
        onBlur={handleBlur}
        value={form.lastNameReport}
        required
        id="lastname"
      />
      {errors.lastNameReport && <p className="p-text-form-error">{errors.lastNameReport}</p>}

      {/* Fecha de nacimiento */}
      <Label text_label={"Fecha de nacimiento"} htmlFor={"fechaNacimiento"} />
      <input
        type="date"
        name="fechaNacimiento"
        onChange={handleChange}
        onBlur={handleBlur}
        value={form.fechaNacimiento}
        required
        id="fechaNacimiento"
      />
      {errors.fechaNacimiento && 
        <p className="p-text-form-error">{errors.fechaNacimiento}</p>
      }


    </div>
  );
}

export default Datos_personales_usuario_registrado;
