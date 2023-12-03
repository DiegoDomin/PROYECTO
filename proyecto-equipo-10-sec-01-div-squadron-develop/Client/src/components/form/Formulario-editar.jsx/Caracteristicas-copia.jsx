import Label from "../../label/Label";
import { Validation } from "../../../assets/Validation/validaciones/Validation";
import { useLocalStorage } from "../../../assets/Validation/validaciones/useLocalStorage";
function Caracteristicas_fisicas_usuario_registrado() {
  const initialForm = {
    colorCabello: "",
    tez: "",
    colorOjos: "",
    altura: "",
    rostro: "",
  };



  // Usando el hook useLocalStorage
  const [storedForm] = useLocalStorage( "ReporteCaso",initialForm);

  // Uso del componente Validation con el hook useLocalStorage
  const { form, errors, handleChange, handleBlur } = Validation(
    storedForm,
    "ReporteCaso"  );

  return (
    <div className="input-form">
      <h2 className="text-title-form-inputs">Caracteristicas fisicas</h2>

      {/* color de cabello*/}
      <Label text_label={"Color de cabello"} htmlFor={"coloCabello"} />

      <input
        type="text"
        name="colorCabello"
        placeholder="Ej.cabello color cafe"
        onChange={handleChange}
        onBlur={handleBlur}
        value={form.colorCabello}
        required
        id="colorCabello"
      />
      {errors.colorCabello && 
        <p className="p-text-form-error">{errors.colorCabello}</p>
      }

      {/* Tez */}
      <Label text_label={"Tez"} htmlFor={"tez"} />

      <input
        type="text"
        name="tez"
        placeholder="Ej. tez colo blanca "
        onChange={handleChange}
        onBlur={handleBlur}
        value={form.tez}
        required
        id="tez"
      />
      {errors.tez && <p className="p-text-form-error">{errors.tez}</p>}

      {/* color de ojos*/}
      <Label text_label={"Color de ojos"} htmlFor={"colorOjos"} />
      <input
        type="text"
        name="colorOjos"
        placeholder="Ej. Color azules claros"
        onChange={handleChange}
        onBlur={handleBlur}
        value={form.colorOjos}
        required
        id="colorOjos"
      />
      {errors.colorOjos && 
        <p className="p-text-form-error">{errors.colorOjos}</p>
      }
      {/* altura */}
      <Label text_label={"Altura"} htmlFor={"altura"} />
      <input
        type="text"
        name="altura"
        placeholder="Ej. 1.80 m"
        onChange={handleChange}
        onBlur={handleBlur}
        value={form.altura}
        id="altura"
        required
      />
      {errors.altura && <p className="p-text-form-error">{errors.altura}</p>}
      {/* Forma del rostro */}
      <Label text_label={"Forma de rostro"} htmlFor={"rostro"} />
      <input
        type="text"
        name="rostro"
        placeholder="Ej.  Cara alargada o triangulo invertido, parte superior ancha (frente, pómulos) y mandíbula estrecha."
        onChange={handleChange}
        onBlur={handleBlur}
        value={form.rostro}
        id="rostro"
        required
      />
      {errors.rostro && <p className="p-text-form-error">{errors.rostro}</p>}
    </div>
  );
}
export default Caracteristicas_fisicas_usuario_registrado;
