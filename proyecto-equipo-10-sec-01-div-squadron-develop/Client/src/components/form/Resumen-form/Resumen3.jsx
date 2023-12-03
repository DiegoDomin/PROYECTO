
import Label from '../../label/Label';
import { useEffect, useState } from 'react';
// Componente que renderiza los datos de los tres formularios
function Resumen3({formKey}) {
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
            <h2 className="text-title-form-inputs">Discapacidades Fisicas</h2>
      {/* discapacidad */}
      <Label text_label={"Discapacidad"}  htmlFor={"discapacidad"}/>
      <input
        type="text"
        name="discapacidad"
        placeholder="Ej. Problemas de la vista"
        // onChange={handleChange}
        //   onBlur={handleBlur}
          value={form.discapacidad}
          required
          id="discapacidad"
      />
              {/* {errors.discapacidad && <p className="p-text-form-error">{errors.discapacidad}</p>} */}

      {/* describa discapacidad */}
      <Label text_label={"Describa la discapacidad (omitir si no lo tiene)" } htmlFor={"descDiscapacidad"} />
      <textarea
        placeholder="Problemas de la vista en el ojo derecho"
        className="txtArea-form"
        name="descDiscapacidad"
        // onChange={handleChange}
        //   onBlur={handleBlur}
          value={form.descDiscapacidad}
          required
          id="desDiscapacidad"
      ></textarea>
            </>
          ) : (
            <p>No hay datos disponibles</p>
          )}
        </div>
      );
}
 export default Resumen3
