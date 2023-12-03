import Label from "../../label/Label";
import img_masculino from "../../../assets/img/img-masculino.png";
import img_Femenino from "../../../assets/img/img-femenino.png";
import img_otros_generos from "../../../assets/img/img-otros-generos.png";
import { Validation } from "../../../assets/Validation/validaciones/Validation";
import { useLocalStorage } from "../../../assets/Validation/validaciones/useLocalStorage";
function Informacion_extra() {
  const initialForm = {
    direccion: "",
    telefono: "",
    telefonoEmergencia: "",
    genero: "",
  };
  // Usando el hook useLocalStorage
  const [storedForm] = useLocalStorage("CrearCuenta", initialForm);

  // Uso del componente Validation con el hook useLocalStorage
  const { form, errors, handleChange, handleBlur } = Validation(
    storedForm,
    "CrearCuenta"
  );
  

  return (
    <>
      <div className="input-form">
        <h2 className="text-title-form-inputs">Informacion Extra </h2>

        {/* direccion  */}
        <Label text_label={"Direccion de domicilio"} htmlFor={"direccion"} />

        <input
          type="text"
          name="direccion"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.direccion}
          placeholder="Ej. lomas de san francisco, calle circunvalacion"
          required
          id="direccion"
        />
        {errors.direccion && (
          <p className="p-text-form-error">{errors.direccion}</p>
        )}

        {/* numero de telefono  */}
        <Label text_label={"Numero de telefono"} htmlFor={"telefono"} />
        <input
          type="tel"
          name="telefono"
          placeholder="Ej. 7424-9842"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.telefono}
          required
          id="telefono"
        />
        {errors.telefono && (
          <p className="p-text-form-error">{errors.telefono}</p>
        )}

        {/* numero telefono EMERGENCIA  */}
        <Label
          text_label={"Numero de telefono de EMERGENCIA"}
          htmlFor={"telefonoEmergencia"}
        />
        <input
          type="tel"
          name="telefonoEmergencia"
          placeholder="Ej. 1234-5678"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.telefonoEmergencia}
          required
          id="telefonoEmergencia"
        />
        {errors.telefonoEmergencia && (
          <p className="p-text-form-error">{errors.telefonoEmergencia}</p>
        )}

        {/* Genero          */}

        <Label text_label={"Genero"} htmlFor={"genero"} />
        {/* masculino */}

        <div className="genero-form">
          <div className="input-container">
            <input
              type="radio"
              name="genero"
              value="masculino"
              onChange={handleChange}
              onBlur={handleBlur}
              checked={form.genero === 'masculino'} 

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
              name="genero"
              id="femenino"
              value="femenino"
              checked={form.genero === 'femenino'} 

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
              name="genero"
              value="otro"
              className="rbtn-genero"
              checked={form.genero === 'otro'} 

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
    </>
  );
}

export default Informacion_extra;
