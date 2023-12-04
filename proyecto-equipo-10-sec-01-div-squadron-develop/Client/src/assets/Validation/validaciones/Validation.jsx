import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
export const Validation = (initialForm, validateForm) => {
  // Utiliza useLocalStorage para el estado del formulario
  const [form, setForm] = useLocalStorage("formData", initialForm); // Aquí se utiliza useLocalStorage

  const [errors, setErrors] = useState({}); // Manejo de errores

  // Estado para rastrear si el formulario ha sido enviado

  // Cambio de valores
  const handleChange = (e) => {
    const { name, value,type,checked } = e.target;
    setForm({
      ...form,
      [name]: value,
    });

    if (type === 'radio') {
      setForm({
        ...form,
        [name]: value,
      });
    } else {
      setForm({
        ...form,
        [name]: type === 'checkbox' ? checked : value,
      });
    }
    // Verifica si validateForm es una función antes de llamarla
    if (typeof validateForm === 'function') {

      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: validateForm({ ...form, [name]: value })[name],
      }));
    }
    
  };

  

  const saveData = (formKey) => {
    if (!formKey) {
      console.error("Form key is required.");
      return;
    }

    localStorage.setItem(formKey, JSON.stringify(form));
    alert(`Datos del formulario ${formKey} guardados exitosamente.`);
  };

  
  
  const handleBlur = (e) => {
    if (e && e.target) {
      const { name, value } = e.target;
      setForm({
        ...form,
        [name]: value,
      });

      // Verifica si validateForm es una función antes de llamarla
      if (typeof validateForm === 'function') {

        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: validateForm({ ...form, [name]: value })[name],
        }));
      }
    }
  };

  // Enviar formulario
  const handleSubmit = (e) => {
    e.preventDefault();
  

  };
  



  const clearForm = () => {

  
    setForm({});

    
  };

  return {
    form,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    saveData,
  clearForm
  };
};
