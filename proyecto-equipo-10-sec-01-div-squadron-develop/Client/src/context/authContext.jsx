// import { createContext, useState, useContext } from "react";
// export const AuthContext = createContext();
// import { registerRequest } from "../services/form.service";
// import { loginRequest } from "../services/form.service";
// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth deberia de estar dentro del provider");
//   }

//   return context;
// };

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [isAuthenticated, setAuthenticated] = useState(false);
//   const [formData, setFormData] = useState({}); // Nuevo estado para el formulario

//   const signup = async (user) => {
//     try {
//       const res = await registerRequest(user);
//       console.log(res.data);
//       setUser(res.data);
//       setAuthenticated(true);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const signin=async(user)=>{
//     try{
//     const res=await loginRequest(user)
//         console.log(res);
//     }catch(error){
//         console.log(error)
//     }
//   }

//   return (
//     <AuthContext.Provider
//       value={{
//         signup,
//         user,
//         isAuthenticated,
//         formData, // Agregar formData al contexto
//         setFormData, // Función para actualizar formData
//         signin
//               }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };
