import { NavLink } from "react-router-dom";
import icon_create_account from "../../assets/icons/icon-create-account.jpg"
import icon_login from "../../assets/icons/icon-login.png"

const DropDown=({link1,link2,nombre,nombre2})=>{
    return(
        <div className="sub-menu-wrap">
            <div className="sub-menu">
            <ul className="dropDown">
                <NavLink to={link1} className="item-dropDown"><img src={icon_create_account} className="icon-dropdown-account" />{nombre}</NavLink>
                <NavLink to={link2} className="item-dropDown" ><img src={icon_login} className="icon-dropdown-login" />{nombre2}</NavLink>
                </ul>
            </div>
              
        </div>
    )
}

export default DropDown