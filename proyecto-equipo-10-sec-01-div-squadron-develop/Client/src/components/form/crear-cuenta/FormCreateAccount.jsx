import { useState } from 'react';
import CorreoContraseña from './Correo-contraseña'; // Asegúrate de importar los componentes correctos
import DatosPersonales from './Datos-personales';
import InformacionExtra from './Informacion-extra';
import { useNavigate } from 'react-router-dom';

import { createAccount } from '../../../services/form.service';
function FormularioRegistro() {
  // Puedes gestionar el estado del formulario completo aquí
  const [form] = useState({
    // Define tus campos aquí
    name_u: '',
    lastName_u: '',
    fechaNacimiento_u: '',
    dui_u: '',
    direccion_u: '',
    numero_tel_u: '',
    numero_tel_emer_u: '',
    genero_u: '',
    correo_u: '',
    password: '',
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
      const apiResponse = await createAccount(formData);
      
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
    <form onSubmit={handleSubmit} className='container-form-crear-cuenta'>

    <div className='container-corre-contra'>
      <CorreoContraseña />
      </div>

      <div className='container-datos-personales'>
      <DatosPersonales />
      </div>
      <div className='container-informacion-extra'>
      <InformacionExtra />
</div>
      {/* Botón para enviar el formulario */}
      <button type='submit' className='btn-next'>Enviar Formulario</button>
      </form>
    </div>
  );
}

export default FormularioRegistro;
