import { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import Label from "../../label/Label";
import { Validation } from "../../../assets/Validation/validaciones/Validation";
import { useLocalStorage } from "../../../assets/Validation/validaciones/useLocalStorage";

function Datos_personales() {
  //se configura los valores iniciales
  const initialForm = {
    name:"",
    lastName:"",
    date:"",
    dui:"",
  };


 // Usando el hook useLocalStorage
const [storedForm, setStoredForm] = useLocalStorage("CrearCuenta", initialForm);
 // Uso del componente Validation con el hook useLocalStorage
const { form, errors, handleChange, handleBlur } = Validation(
  
   storedForm,
   "CrearCuenta"
 );

// DUI Validation State
const [dui, setDUI] = useState('');
const [duiResult, setDUIResult] = useState(null);

// DUI Validation Effect
useEffect(() => {
  const validarDUI = () => {
    const regex = /(^\d{8})-(\d$)/;
    const parts = dui.match(regex);

    if (parts !== null) {
      const digits = parts[1];
      const digVe = parseInt(parts[2], 10);
      let sum = 0;

      for (let i = 0, l = digits.length; i < l; i++) {
        const d = parseInt(digits[i], 10);
        sum += (9 - i) * d;
      }

      const esValido = digVe === (10 - (sum % 10)) % 10;
      setDUIResult(esValido);
    } else {
      setDUIResult(null);
    }
  };

  validarDUI();
}, [dui]);


const handleStorageChange = () => {
  setStoredForm(form);
};


  return (
      <div className="input-form-datos-personales-crear-cuenta">
        <h2 className="text-title-form-inputs">Tu Informacion Personal</h2>

        {/* nombres */}
        <Label text_label={"Nombres"} htmlFor={"name"}/>
        <input
          type="text"
          name="name"
          placeholder="Ej. Marcos Jose"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.name}
          required
          id="name"
        />
  {errors.name && <p className="p-text-form-error">{errors.name}</p>}
        {/* Apellidos */}
        <Label text_label={"Apellidos"} htmlFor={"lastName"} />
        <input
          type="text"
          name="lastName"
          placeholder="Ej. Martines Rivas"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.lastName}
          required
          id="lastName"
        />
          {errors.lastName && <p className="p-text-form-error">{errors.lastName}</p>}

        {/* fecha de nacimiento */}
        <Label text_label={"Fecha de nacimiento"} htmlFor={"date"}/>
        <input
          type="date"
          name="date"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.date}
          required
          id="date"
        />
          {errors.date && <p className="p-text-form-error">{errors.date}</p>}

        {/* dui */}
        <Label text_label={'DUI'} htmlFor={'dui'} />
      <input
        type="text"
        name="dui"
        placeholder="Ej. 06667522-0"
        onChange={(e) => {
          handleChange(e);
          setDUI(e.target.value); // Update DUI state for validation
        }}
        onBlur={(e) => {
          handleBlur(e);
          handleStorageChange();
        }}
        value={form.dui}
        required
        id="dui"
      />
      {errors.dui && <p className="p-text-form-error">{errors.dui}</p>}
      {duiResult !== null && <p>{duiResult ? 'DUI válido' : 'DUI no válido'}</p>}

      {/* Botón Atrás */}
      <NavLink to="/iniciar-sesion" className="question-account">
        ¿Ya tienes cuenta? Inicia sesión aquí
      </NavLink>


      </div>

    
  );
}
export default Datos_personales;
