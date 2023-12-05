import Label from "../../label/Label";
import { Validation } from "../../../assets/Validation/validaciones/Validation";
import { useLocalStorage } from "../../../assets/Validation/validaciones/useLocalStorage"; // Ajusta la ruta según tu estructura de archivos
import img_masculino from "../../../assets/img/img-masculino.png";
import img_Femenino from "../../../assets/img/img-femenino.png";
import img_otros_generos from "../../../assets/img/img-otros-generos.png";
function Datos_personales_usuario_registrado() {
  // Se configuran los valores iniciales de los inputs
  const initialForm = {
    name: "",
    last_name: "",
    fecha_nacimiento: "",
    gender:""
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
        name="name"
        placeholder="Ej. Marcos Jose"
        onChange={handleChange}
        onBlur={handleBlur}
        value={form.name}
        required
        id="name2"
      />
      {/* Muestra el mensaje de error debajo del input, no dentro del mismo */}
      {errors.name && <p className="p-text-form-error">{errors.name}</p>}

      {/* apellidos */}
      <Label text_label={"Apellidos"} htmlFor={"lastname2"} />
      <input
        type="text"
        name="last_name"
        placeholder="Ej. Martinez Rivas"
        onChange={handleChange}
        onBlur={handleBlur}
        value={form.last_name}
        required
        id="lastname"
      />
      {errors.last_name && <p className="p-text-form-error">{errors.last_name}</p>}

      {/* Fecha de nacimiento */}
      <Label text_label={"Fecha de nacimiento"} htmlFor={"fecha_nacimiento"} />
      <input
        type="date"
        name="fecha_nacimiento"
        onChange={handleChange}
        onBlur={handleBlur}
        value={form.fecha_nacimiento}
        required
        id="fecha_nacimiento"
      />
      {errors.fecha_nacimiento && 
        <p className="p-text-form-error">{errors.fecha_nacimiento}</p>
      }
      <Label text_label={"Genero"} htmlFor={"genero"} />
        {/* masculino */}

        <div className="genero-form">
          <div className="input-container">
            <input
              type="radio"
              name="gender"
              value="masculino"
              onChange={handleChange}
              onBlur={handleBlur}
              checked={form.gender === 'masculino'} 

              required
              id="masculino"
              className="rbtn-genero"
            />
            <div className="radio-title">
              <img src={img_masculino} className="icon-genero"></img>

              <Label text_label={"Masculino"} htmlFor={"masculino"} />
            </div>
          </div>

          {/* femenino */}
          <div className="input-container">
            <input
              type="radio"
              name="gender"
              id="femenino"
              value="femenino"
              checked={form.gender === 'femenino'} 

              className="rbtn-genero"
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            <div className="radio-title">
              <img src={img_Femenino} className="icon-genero"></img>

              <Label text_label={"Femenino"} htmlFor={"femenino"} />
            </div>
          </div>

          {/* otros generos */}
          <div className="input-container">
            <input
              type="radio"
              name="gender"
              value="otro"
              className="rbtn-genero"
              checked={form.gender === 'otro'} 

              onChange={handleChange}
              onBlur={handleBlur}
              id="otro"
            />
            <div className="radio-title">
              <img src={img_otros_generos} className="icon-genero"></img>

              <Label text_label={"Otros"} htmlFor={"otro"} />
            </div>
          </div>
        </div>

    </div>
  );
}

export default Datos_personales_usuario_registrado;
