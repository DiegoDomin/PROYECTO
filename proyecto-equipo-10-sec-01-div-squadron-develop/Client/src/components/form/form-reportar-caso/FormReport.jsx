import { useState } from 'react';
import Caracteristicas_fisicas_usuario_registrado from './Caracteristicas-fisicas';
import Datos_personales_usuario_registrado from './Datos-personales';
import Discapacidad from './Discapacidad';
import Fecha_hora from './Fecha-hora';
import Fotografia_usuario_registrado from './Fotografia';
import Ultimo_lugar from './Ultimo-lugar';
import Vestimenta from './Vestimenta';
import { useNavigate } from 'react-router-dom';

import { createForm } from '../../../services/form.service';
function FormularioReporte() {
  // Puedes gestionar el estado del formulario completo aquí
  const [form] = useState({
    // Define tus campos aquí
    name: "",
    last_name: "",
    fecha_nacimiento: "",
    color_ca: "",
    tez: "",
    color_ey: "",
    height: "",
    forma_rostro: "",
    discapacidad: "",
    descrip_discapa: "",
    time: "",
    date_desa: "",
    condicion: "",
    img: "",
    lat: "",
    lon:"",
    vestimenta: "",
    gender:""

  });
  const navigate = useNavigate();

// Luego en 
 

const handleSubmit = async (e) => {
    e.preventDefault(); // Evita la recarga de la página
  
    try {
      const localStorageData = localStorage.getItem('formData');
  
      const parsedData = JSON.parse(localStorageData);
        
      const formData = { ...form, ...parsedData };
  
      // Enviar datos a la API
      const apiResponse = await createForm(formData);
      
      console.log('API Response:', apiResponse);
  
      // Limpiar localStorage después de enviar
      localStorage.removeItem('formData');
  
      // Puedes hacer otras acciones después de enviar, como redireccionar o mostrar un mensaje de éxito
      navigate('/reportar-caso-usuario');

    } catch (error) {
        console.error('Error al enviar el formulario:', error.response.status, error.response.data);
        // Puedes manejar el error de alguna manera, como mostrar un mensaje al usuario
    }
  };
  return (
    <div>
    <form onSubmit={handleSubmit}>
      <Datos_personales_usuario_registrado />
      <Caracteristicas_fisicas_usuario_registrado />
      <Discapacidad />
      <Fecha_hora/>
      <Fotografia_usuario_registrado />
      <Ultimo_lugar/>
      <Vestimenta />

      {/* Botón para enviar el formulario */}
      <button type='submit'>Enviar Formulario</button>
      </form>
    </div>
  );
}

export default FormularioReporte;
