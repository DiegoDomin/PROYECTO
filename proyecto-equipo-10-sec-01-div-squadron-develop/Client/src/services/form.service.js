import axios from "axios";


const BASE_URL="http://localhost:3500/api"


export const createForm=async (form)=>{

    try {
        const response = await axios.post(`${BASE_URL}/disapp`, form, {
              headers: {
            'Content-Type': 'application/json',
          },
        });
    
        return response.data;
    
    }catch (error) {
        console.error('Error al realizar la petición:', error);
        throw new Error("Error occurred while creating the movie. Please try again.");
      }

}



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



  // export const Login =async(correo,password)=>{
  //   try {
  //       const response = await axios.post(`${BASE_URL}/auth/login`,correo,password);
  //       if (response.status === 200) return response.data.data;

  //   } catch (error) {
  //     console.log("Error:", error.message);
  //     return [];
  //   }
  // }

  
  export const Login = async (correo, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/login`, {
      correo: correo,
      password: password,
    });

    if (response.status === 200) return response.data.data;
  } catch (error) {
    console.log("Error:", error.message);
    return [];
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
