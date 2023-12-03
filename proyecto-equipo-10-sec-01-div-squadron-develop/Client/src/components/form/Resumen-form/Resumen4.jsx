
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
            <Label  text_label={"Vestimenta"} htmlFor={"vestimenta"}/>
     <textarea placeholder="Ej. Camisa manga larga color roja, pantalon jeans azules, zapatos color blancos marca adidas" className="txtArea-form"
     name="infoVestimenta"
        //  onChange={handleChange}
        //   onBlur={handleBlur}
          value={form.infoVestimenta}
          required
          id="vestimenta"
          >
         
     </textarea>
            </>
          ) : (
            <p>No hay datos disponibles</p>
          )}
        </div>
      );
}
 export default Resumen4
