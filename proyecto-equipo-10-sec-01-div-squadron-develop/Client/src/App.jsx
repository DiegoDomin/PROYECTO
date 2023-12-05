import "./assets/sass/main.scss";
import { BrowserRouter , Routes, Route} from "react-router-dom";

//visitante
import Inicio from "./pages/Visitante/Inicio";
import Instructivo from "./pages/Visitante/Instructivo";
import Preguntas_frecuentes from "./pages/Visitante/Preguntas-frecuentes";
import Quienes_somos from "./pages/Visitante/Quienes-somos";

//Registrado
import Inicio_usuario_registrado from "./pages/Registrado/Inicio";
import Instructivo_usuario_registrado from "./pages/Registrado/Instructivo";
import PQ_usuario_registrado from "./pages/Registrado/Preguntas-frecuentes";
import QS_usuario_registrado from "./pages/Registrado/Quienes-somos";
import EditarFormulario from "./pages/Registrado/Editar-form";
// import Reportar_caso from "./pages/Registrado/Reportar-caso";
import Reportar_caso from "./pages/Registrado/Reportar-caso";
import Form_reportar from "./pages/Registrado/form-reportar-caso";
import Crearcuenta from "./pages/Crearcuenta";
import Iniciarsesion from "./pages/Iniciarsesion";


//admin
import Reportes from "./components/admin/admin";
import Administrador from "./pages/Administrador/Administrador";

function App() {


  return (
    <>
      <BrowserRouter>
      
        <Routes>
        {/* Visitante */}
          <Route path="/" element={<Inicio />} />
          <Route path="/instructivo" element={<Instructivo />} />
          <Route path="/preguntas-frecuentes" element={<Preguntas_frecuentes />} />
          <Route path="/quienes-somos" element={<Quienes_somos />} />


          {/* registrado */}
        


<>
            <Route path="/inicio-usuario" element={<Inicio_usuario_registrado />} />
          <Route path="/instructivo-usuario" element={<Instructivo_usuario_registrado />} />
          <Route path="/preguntas-frecuentes-usuario" element={<PQ_usuario_registrado />} />
          <Route path="/quienes-somos-usuario" element={<QS_usuario_registrado />} />
          <Route path="/reportar-caso-usuario" element={<Reportar_caso/>} />
          <Route path="/reportar-caso-usuario-form" element={<Form_reportar/>} />
          <Route path="/reportar-caso-usuario-form-editar" element={<EditarFormulario />} />
          </>
        
   
          

          {/* cuenta */}
          <Route path="/crear-cuenta" element={<Crearcuenta />} />
          <Route path="/iniciar-sesion" element={<Iniciarsesion />} />


          {/* reportes */}
          <Route path="/admin/vista" element={<Reportes />} />
          <Route path="/administrador" element={<Administrador/>}/>


{/* RUTAS PROTEGIDAS */}



        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
