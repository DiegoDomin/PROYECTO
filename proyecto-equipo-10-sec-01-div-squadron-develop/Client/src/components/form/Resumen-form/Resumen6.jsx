
import Label from '../../label/Label';
import { useEffect, useState } from 'react';
// Componente que renderiza los datos de los tres formularios
function Resumen6({formKey}) {
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
            <Label  text_label={"Lugar donde fue visto por ultima vez"} htmlFor={"lugar"}/>
     <textarea placeholder="Ej. lomas de san francisco, calle circunvalacion por el dominos pizza" className="txtArea-form"
     name="lugar"
        //  onChange={handleChange}
        //   onBlur={handleBlur}
          value={form.lugar}
          required
          id="lugar"
          >
        
     </textarea>


            </>
          ) : (
            <p>No hay datos disponibles</p>
          )}
        </div>
      );
}
 export default Resumen6