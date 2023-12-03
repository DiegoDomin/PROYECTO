import Label from "../../label/Label";
import { Validation } from "../../../assets/Validation/validaciones/Validation";
import { useLocalStorage } from "../../../assets/Validation/validaciones/useLocalStorage";
function Fecha_hora() {
  const initialForm = {
    hora: "",
    fecha: "",
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
        name="hora"
        onChange={handleChange}
        onBlur={handleBlur}
        value={form.hora}
        required
        id="hora"
      />
                    {errors.hora && <p className="p-text-form-error">{errors.hora}</p>}

      {/* describa discapacidad */}
      <Label text_label={"Fecha de la desaparicion"} htmlFor={"fecha"}/>
      <input
        type="date"
        name="fecha"
        onChange={handleChange}
        onBlur={handleBlur}
        value={form.fecha}
        required
        id="fecha"
      />
                    {errors.fecha && <p className="p-text-form-error">{errors.fecha}</p>}

    </div>
  );
}

export default Fecha_hora;
