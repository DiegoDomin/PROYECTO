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

  export const createAccount = async (form) => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/registrarse`,form);
  
      if (response.status === 200) return response.data.data;
      else return [];
    } catch (error) {
      console.log("Error:", error.message);
      return [];
    }
  };



