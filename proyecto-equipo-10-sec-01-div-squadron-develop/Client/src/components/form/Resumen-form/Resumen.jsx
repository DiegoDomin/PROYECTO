{/* <div className="input-form">
      <h2 className="text-title-form-inputs">Datos Personales</h2>
      {/* nombres */}
      // <Label text_label={"Nombres"} htmlFor={"name2"} />
      // <input
      //   type="text"
      //   name="nameReport"
      //   placeholder="Ej. Marcos Jose"
      //   onChange={handleChange}
      //   onBlur={handleBlur}
      //   value={form.nameReport}
      //   required
      //   id="name2"
      // />
      // {/* Muestra el mensaje de error debajo del input, no dentro del mismo */}
      // {errors.nameReport && <p className="p-text-form-error">{errors.nameReport}</p>}

      // {/* apellidos */}
      // <Label text_label={"Apellidos"} htmlFor={"lastname2"} />
      // <input
      //   type="text"
      //   name="lastNameReport"
      //   placeholder="Ej. Martinez Rivas"
      //   onChange={handleChange}
      //   onBlur={handleBlur}
      //   value={form.lastNameReport}
      //   required
      //   id="lastname"
      // />
      // {errors.lastNameReport && <p className="p-text-form-error">{errors.lastNameReport}</p>}

      // {/* Fecha de nacimiento */}
      // <Label text_label={"Fecha de nacimiento"} htmlFor={"fechaNacimiento"} />
      // <input
      //   type="date"
      //   name="fechaNacimiento"
      //   onChange={handleChange}
      //   onBlur={handleBlur}
      //   value={form.fechaNacimiento}
      //   required
      //   id="fechaNacimiento"
      // />
      // {errors.fechaNacimiento && 
      //   <p className="p-text-form-error">{errors.fechaNacimiento}</p>
      



import Label from '../../label/Label';
import { useEffect, useState } from 'react';
// Componente que renderiza los datos de los tres formularios
function Resumen({formKey}) {
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
            <Label text_label={"Nombres"} htmlFor={"name2"} />
            <input
        type="text"
        name="nameReport"
        placeholder="Ej. Marcos Jose"
      
        value={form.nameReport}
        required
        id="name2"
        />
        <Label text_label={"Nombres"} htmlFor={"name2"} />
      <input
        type="text"
        name="nameReport"
        placeholder="Ej. Marcos Jose"
        // onChange={handleChange}
        // onBlur={handleBlur}
        value={form.lastNameReport}
        required
        id="name2"
      />
        <Label text_label={"Fecha de nacimiento"} htmlFor={"fechaNacimiento"} />
       <input
        type="date"
        name="fechaNacimiento"
     
        value={form.fechaNacimiento}
        required
        id="fechaNacimiento"
      />
            </>
          ) : (
            <p>No hay datos disponibles</p>
          )}
        </div>
      );
}
 export default Resumen
