import Label from "../../label/Label";
import { Validation } from "../../../assets/Validation/validaciones/Validation";
import { useLocalStorage } from "../../../assets/Validation/validaciones/useLocalStorage";
function Fecha_hora() {
  const initialForm = {
    time: "",
    date_desa: "",
  };


  // Usando el hook useLocalStorage
  const [storedForm] = useLocalStorage("FechaHoraReportar",initialForm);

  // Uso del componente Validation con el hook useLocalStorage
  const { form, errors, handleChange, handleBlur } = Validation(
    storedForm,
    "FechaHoraReportar"
                );


  return (
    <div className="input-form-fecha-hora">
      <h2 className="text-title-form-inputs">Fecha y hora</h2>

      <Label
        text_label={"Hora que vio por ultima vez a la persona desaparecida"}
        htmlFor={"hora"}
      />
      <input
        type="time"
        name="time"
        onChange={handleChange}
        onBlur={handleBlur}
        value={form.time}
        required
        id="hora"
      />
                    {errors.time && <p className="p-text-form-error">{errors.time}</p>}

      {/* describa discapacidad */}
      <Label text_label={"Fecha de la desaparicion"} htmlFor={"fecha"}/>
      <input
        type="date"
        name="date_desa"
        onChange={handleChange}
        onBlur={handleBlur}
        value={form.date_desa}
        required
        id="fecha"
      />
                    {errors.date_desa && <p className="p-text-form-error">{errors.date_desa}</p>}

    </div>
  );
}

export default Fecha_hora;
