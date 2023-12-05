import axios from "axios";


const BASE_URL="http://localhost:3500/api"





export const getForm=async (id)=>{

    try {
        const response = await axios.get(`${BASE_URL}/disapp/${id}`);

        if (response.status === 200) return response.data.data;
      else return [];
    
    }catch (error) {
        console.error('Error al realizar la petición:', error);
        throw new Error("Error occurred while creating the movie. Please try again.");
      }

}



export const getAllForm = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/disapp`);
  
      if (response.status === 200) return response.data.data;
      else return [];
    } catch (error) {
      console.log("Error:", error.message);
      return [];
    }
  };



  export const createAccount = async (formData) => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/registrarse`, formData, {
        headers: {
          'Content-Type': 'application/json',
          // Aquí podrías incluir otros encabezados según sea necesario
        },
      });
  
      // Axios ya maneja la verificación de respuesta exitosa (status 2xx) por defecto
      // Pero puedes agregar tu propia lógica de manejo de errores si es necesario
  
      const responseData = response.data;
      console.log('Respuesta de la API:', responseData);
  
      // Puedes devolver cualquier información adicional que necesites en tu aplicación
      return responseData;
    } catch (error) {
      console.error('Error al crear la cuenta:', error.message);
      throw error;
    }
  };
  


  export const login = async (correo, password) => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/login`, { correo_u: correo, password });
      console.log(response)
      // Resto del código para manejar la respuesta exitosa
    } catch (error) {
      if (error.response) {
        // La solicitud fue realizada y el servidor respondió con un código de estado diferente de 2xx
        console.log('Error en el servidor:', error.response.data);
      } else if (error.request) {
        // La solicitud fue realizada pero no se recibió respuesta
        console.log('No se recibió respuesta del servidor.');
      } else {
        // Ocurrió un error durante la configuración de la solicitud
        console.error('Error al configurar la solicitud:', error.message);
      }
    }
  };




export const createForm = async (formData) => {
  try {
    // Obtén los datos del localStorage si existen
    const localStorageData = JSON.parse(localStorage.getItem('userData')) || {};

    // Combina los datos del formulario con los datos del localStorage
    const combinedData = {
      ...formData,
      ...localStorageData,
    };

    const response = await axios.post(`${BASE_URL}/disapp`, combinedData, {
      headers: {
        'Content-Type': 'application/json',
        // Otros encabezados según sea necesario
      },
    });

    // Axios ya maneja la verificación de respuesta exitosa (status 2xx) por defecto
    // Pero puedes agregar tu propia lógica de manejo de errores si es necesario

    const responseData = response.data;
    console.log('Respuesta de la API:', responseData);

    // Puedes devolver cualquier información adicional que necesites en tu aplicación
    return responseData;
  } catch (error) {
    console.error('Error al enviar el formulario:', error.message);
    throw error;
  }
};

// En tu servicio form.service:

// ... Otras importaciones y código anterior ...

export const generatorPDF= async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/disapp/pdf/${id}`, {
      responseType: 'arraybuffer', // Indica que la respuesta es un array de bytes
    });

    // Puedes manejar el archivo de respuesta como desees.
    // En este ejemplo, estoy devolviendo los datos binarios directamente.
    return response.data;

  } catch (error) {
    console.error('Error al realizar la petición del PDF:', error);
    throw new Error("Error occurred while fetching the PDF. Please try again.");
  }
};
