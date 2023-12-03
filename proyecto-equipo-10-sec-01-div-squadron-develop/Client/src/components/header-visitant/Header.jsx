import Navigation from "./navigation-visitant/Navigation";
import perfilFoto from "../../assets/img/img-perfil.png"
import logoMirame from "../../assets/img/logo.png";
import DropDown from "../dropdawn/DropDown";
import { useState } from "react";

function Header(){
const [openProfile,setOpenProfile]=useState(false);


return(
        <div className="content-header">
        <img src={logoMirame} alt="logo" className="image-logo"/>
        <div className="content-perfil">
    
        <Navigation />
        
        <img src={perfilFoto} alt="perfil-foto" className="image-perfil" onClick={()=>{
            setOpenProfile((prev)=>!prev)
        }}/>    
        
        {openProfile &&  <DropDown link1={"/crear-cuenta"} link2={"/iniciar-sesion"} nombre={"Crear cuenta"} nombre2={"Iniciar sesion"}/>}
       
        </div>
    </div>
)

}

export default Header;