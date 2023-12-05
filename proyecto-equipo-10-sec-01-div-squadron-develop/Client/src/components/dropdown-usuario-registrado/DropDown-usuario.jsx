import { NavLink } from "react-router-dom";
import icon_exit_account from "../../assets/icons/icon-cerrar-sesion.png"
import { logout } from "../../services/form.service";
const DropDown_Usuario=({link1})=>{
    const handleLogout = async () => {
        try {
          // Llamada a la función de logout
          await logout();
    
          // Realiza otras acciones después del logout si es necesario
          console.log("Logout exitoso");
    
          // Aquí podrías redirigir al usuario o actualizar el estado de tu aplicación
        } catch (error) {
          // Manejar errores si es necesario
          console.error("Error al cerrar sesión:", error.message);
        }
      };
    return(
        <div className="sub-menu-wrap">
            <div className="sub-menu">
            <ul className="dropDown">
                <NavLink to={link1} className="item-dropDown"><img src={icon_exit_account} className="icon-dropdown-exit-account" onClick={handleLogout}/>Cerrar sesion</NavLink>
              
                </ul>
            </div>
              
        </div>
    )
}

export default DropDown_Usuario