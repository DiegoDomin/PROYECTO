
import Label from '../../label/Label';
import { useEffect, useState } from 'react';
// Componente que renderiza los datos de los tres formularios
function Resumen2({formKey}) {
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
      <Label text_label={"Color de cabello"} htmlFor={"coloCabello"} />

      <input
        type="text"
        name="colorCabello"
        placeholder="Ej.cabello color cafe"
        // onChange={handleChange}
        // onBlur={handleBlur}
        value={form.colorCabello}
        required
        id="colorCabello"
      />
      {/* {errors.colorCabello && 
        <p className="p-text-form-error">{errors.colorCabello}</p>
      } */}

      {/* Tez */}
      <Label text_label={"Tez"} htmlFor={"tez"} />

      <input
        type="text"
        name="tez"
        placeholder="Ej. tez colo blanca "
        // onChange={handleChange}
        // onBlur={handleBlur}
        value={form.tez}
        required
        id="tez"
      />
      {/* {errors.tez && <p className="p-text-form-error">{errors.tez}</p>} */}

      {/* color de ojos*/}
      <Label text_label={"Color de ojos"} htmlFor={"colorOjos"} />
      <input
        type="text"
        name="colorOjos"
        placeholder="Ej. Color azules claros"
        // onChange={handleChange}
        // onBlur={handleBlur}
        value={form.colorOjos}
        required
        id="colorOjos"
      />
      {/* {errors.colorOjos && 
        <p className="p-text-form-error">{errors.colorOjos}</p>
      } */}
      {/* altura */}
      <Label text_label={"Altura"} htmlFor={"altura"} />
      <input
        type="text"
        name="altura"
        placeholder="Ej. 1.80 m"
        // onChange={handleChange}
        // onBlur={handleBlur}
        value={form.altura}
        id="altura"
        required
      />
      {/* {errors.altura && <p className="p-text-form-error">{errors.altura}</p>} */}
      Forma del rostro
      <Label text_label={"Forma de rostro"} htmlFor={"rostro"} />
      <input
        type="text"
        name="rostro"
        placeholder="Ej.  Cara alargada o triangulo invertido, parte superior ancha (frente, pómulos) y mandíbula estrecha."
        // onChange={handleChange}
        // onBlur={handleBlur}
        value={form.rostro}
        id="rostro"
        required
      />
            </>
          ) : (
            <p>No hay datos disponibles</p>
          )}
        </div>
      );
}
 export default Resumen2
