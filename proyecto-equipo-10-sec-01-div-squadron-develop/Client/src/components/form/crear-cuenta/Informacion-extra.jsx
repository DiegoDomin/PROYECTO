import Label from "../../label/Label";
import img_masculino from "../../../assets/img/img-masculino.png";
import img_Femenino from "../../../assets/img/img-femenino.png";
import img_otros_generos from "../../../assets/img/img-otros-generos.png";
import { Validation } from "../../../assets/Validation/validaciones/Validation";
import { useLocalStorage } from "../../../assets/Validation/validaciones/useLocalStorage";
function Informacion_extra() {
  const initialForm = {
    direccion_u: '',
    numero_tel_u: '',
    numero_tel_emer_u: '',
    genero_u: '',
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
          name="direccion_u"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.direccion_u}
          placeholder="Ej. lomas de san francisco, calle circunvalacion"
          required
          id="direccion"
        />
        {errors.direccion_u && (
          <p className="p-text-form-error">{errors.direccion_u}</p>
        )}

        {/* numero de telefono  */}
        <Label text_label={"Numero de telefono"} htmlFor={"telefono"} />
        <input
          type="tel"
          name="numero_tel_u"
          placeholder="Ej. 7424-9842"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.numero_tel_u}
          required
          id="telefono"
        />
        {errors.numero_tel_u && (
          <p className="p-text-form-error">{errors.numero_tel_u}</p>
        )}

        {/* numero telefono EMERGENCIA  */}
        <Label
          text_label={"Numero de telefono de EMERGENCIA"}
          htmlFor={"telefonoEmergencia"}
        />
        <input
          type="tel"
          name="numero_tel_emer_u"
          placeholder="Ej. 1234-5678"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.numero_tel_emer_u}
          required
          id="telefonoEmergencia"
        />
        {errors.numero_tel_emer_u && (
          <p className="p-text-form-error">{errors.numero_tel_emer_u}</p>
        )}

        {/* Genero          */}

        <Label text_label={"Genero"} htmlFor={"genero"} />
        {/* masculino */}

        <div className="genero-form">
          <div className="input-container">
            <input
              type="radio"
              name="genero_u"
              value="masculino"
              onChange={handleChange}
              onBlur={handleBlur}
              checked={form.genero_u === 'masculino'} 

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
              name="genero_u"
              id="femenino"
              value="femenino"
              checked={form.genero_u === 'femenino'} 

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
              name="genero_u"
              value="otro"
              className="rbtn-genero"
              checked={form.genero_u === 'otro'} 

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
