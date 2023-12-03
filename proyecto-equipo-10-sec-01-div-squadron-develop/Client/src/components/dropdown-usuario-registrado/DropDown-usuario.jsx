import { NavLink } from "react-router-dom";
import icon_exit_account from "../../assets/icons/icon-cerrar-sesion.png"

const DropDown_Usuario=({link1})=>{
    return(
        <div className="sub-menu-wrap">
            <div className="sub-menu">
            <ul className="dropDown">
                <NavLink to={link1} className="item-dropDown"><img src={icon_exit_account} className="icon-dropdown-exit-account" />Cerrar sesion</NavLink>
              
                </ul>
            </div>
              
        </div>
    )
}

export default DropDown_Usuario