import perfilFoto from "../../assets/img/img-perfil.png"
import Navigation from "./navigation-usuario-registrado/Navigation";
import logoMirame from "../../assets/img/logo.png";
import DropDown_Usuario from "../dropdown-usuario-registrado/DropDown-usuario";
import { useState } from "react";

function Header_usuario_registrado(){
const [openProfile,setOpenProfile]=useState(false);
return(
    <div className="content-header">
    <img src={logoMirame} alt="logo" className="image-logo"/>
    <div className="content-perfil">
    <Navigation />
    
    <img src={perfilFoto} alt="perfil-foto" className="image-perfil" onClick={()=>{
        setOpenProfile((prev)=>!prev)
    }}/>    
    
    {openProfile &&  <DropDown_Usuario link1={"/"} nombre={"Cerrar sesion"}/>}
       
        </div>
    </div>
)

}

export default Header_usuario_registrado;