
import Label from '../../label/Label';
import { useEffect, useState } from 'react';
// Componente que renderiza los datos de los tres formularios
function Resumen4({formKey}) {
    const [form,setForm]=useState('');
    const getData = () => {
        const storedData = localStorage.getItem(formKey);
        return storedData ? JSON.parse(storedData) : null;
      };
      useEffect(() => {
        setForm(getData());
      }, [formKey]);
      return (
        <div>
          {form ? (
            <>
            <h2 className="text-title-form-inputs">Fecha y hora</h2>

<Label
  text_label={"Hora que vio por ultima vez a la persona desaparecida"}
  htmlFor={"hora"}
/>
<input
  type="time"
  name="hora"
//   onChange={handleChange}
//   onBlur={handleBlur}
  value={form.hora}
  required
  id="hora"
/>
              {/* {errors.hora && <p className="p-text-form-error">{errors.hora}</p>} */}

{/* describa discapacidad */}
<Label text_label={"Fecha de la desaparicion"} htmlFor={"fecha"}/>
<input
  type="date"
  name="fecha"
//   onChange={handleChange}
//   onBlur={handleBlur}
  value={form.fecha}
  required
  id="fecha"
/>
            </>
          ) : (
            <p>No hay datos disponibles</p>
          )}
        </div>
      );
}
 export default Resumen4
