import Label from "../../label/Label";
import { Validation } from "../../../assets/Validation/validaciones/Validation";
import { useLocalStorage } from "../../../assets/Validation/validaciones/useLocalStorage";
function Discapacidad() {

     const initialForm = {
          discapacidad: "",
          descDiscapacidad: "",
        };
      
     

     // Usando el hook useLocalStorage
  const [storedForm] = useLocalStorage("DiscapacidadReportar",initialForm);

  // Uso del componente Validation con el hook useLocalStorage
  const { form, errors, handleChange, handleBlur } = Validation(
    storedForm,
    "DiscapacidadReportar"
                );

  return (
    <div className="input-form-discapacidad">
      <h2 className="text-title-form-inputs">Discapacidades Fisicas</h2>
      {/* discapacidad */}
      <Label text_label={"Discapacidad"}  htmlFor={"discapacidad"}/>
      <input
        type="text"
        name="discapacidad"
        placeholder="Ej. Problemas de la vista"
        onChange={handleChange}
          onBlur={handleBlur}
          value={form.discapacidad}
          required
          id="discapacidad"
      />
              {errors.discapacidad && <p className="p-text-form-error">{errors.discapacidad}</p>}

      {/* describa discapacidad */}
      <Label text_label={"Describa la discapacidad (omitir si no lo tiene)" } htmlFor={"descDiscapacidad"} />
      <textarea
        placeholder="Problemas de la vista en el ojo derecho"
        className="txtArea-form"
        name="descDiscapacidad"
        onChange={handleChange}
          onBlur={handleBlur}
          value={form.descDiscapacidad}
          required
          id="desDiscapacidad"
      ></textarea>
              {errors.descDiscapacidad && <p className="p-text-form-error">{errors.descDiscapacidad}</p>}

    </div>
  );
}

export default Discapacidad;
