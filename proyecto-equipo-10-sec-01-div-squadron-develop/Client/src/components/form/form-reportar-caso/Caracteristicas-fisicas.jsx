  import Label from "../../label/Label";
  import { Validation } from "../../../assets/Validation/validaciones/Validation";
  import { useLocalStorage } from "../../../assets/Validation/validaciones/useLocalStorage";
  function Caracteristicas_fisicas_usuario_registrado() {
    const initialForm = {
      color_ca: "",
      tez: "",
      color_ey: "",
      height: "",
      forma_rostro: "",
    };



    // Usando el hook useLocalStorage
    const [storedForm] = useLocalStorage("CaracterististicasFisicasReportar",initialForm);

    // Uso del componente Validation con el hook useLocalStorage
    const { form, errors, handleChange, handleBlur } = Validation(
      storedForm,
      "CaracterististicasFisicasReportar"
          );

    return (
      <div className="input-form">
        <h2 className="text-title-form-inputs">Caracteristicas fisicas</h2>

        {/* color de cabello*/}
        <Label text_label={"Color de cabello"} htmlFor={"coloCabello"} />

        <input
          type="text"
          name="color_ca"
          placeholder="Ej.cabello color cafe"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.color_ca}
          required
          id="color_ca"
        />
        {errors.color_ca && 
          <p className="p-text-form-error">{errors.color_ca}</p>
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
        <Label text_label={"Color de ojos"} htmlFor={"color_ey"} />
        <input
          type="text"
          name="color_ey"
          placeholder="Ej. Color azules claros"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.color_ey}
          required
          id="color_ey"
        />
        {errors.color_ey && 
          <p className="p-text-form-error">{errors.color_ey}</p>
        }
        {/* height */}
        <Label text_label={"Altura"} htmlFor={"height"} />
        <input
          type="text"
          name="height"
          placeholder="Ej. 1.80 m"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.height}
          id="height"
          required
        />
        {errors.height && <p className="p-text-form-error">{errors.height}</p>}
        {/* Forma del forma_rostro */}
        <Label text_label={"Forma de forma_rostro"} htmlFor={"forma_rostro"} />
        <input
          type="text"
          name="forma_rostro"
          placeholder="Ej.  Cara alargada o triangulo invertido, parte superior ancha (frente, pómulos) y mandíbula estrecha."
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.forma_rostro}
          id="forma_rostro"
          required
        />
        {errors.forma_rostro && <p className="p-text-form-error">{errors.forma_rostro}</p>}

      </div>
    );
  }
  export default Caracteristicas_fisicas_usuario_registrado;
