import { Link } from "react-router-dom";
import logo from "../assets/Caps-Shop-Logo.png";
import {BsMinecartLoaded} from"react-icons/bs"; 
import {GrFavorite} from"react-icons/gr";

function Header({cart,fav,setDropCart,setDropfav}) {
    return (
        <header>
            <img src={logo} className="logo" alt="React logo" />
            <ul>
                <li><Link className="header-link" to="/acceuil">Acceuil</Link></li>
                <li><Link className="header-link" to="/contact">Contact</Link></li>
                <li><Link className="header-link" to="/service">Service</Link></li>
                <li><Link className="header-link" to="/login">Login</Link></li>
                <li onClick={setDropCart}>  <span><BsMinecartLoaded/>{cart.length}</span></li>
                <li onClick={setDropfav}><span><GrFavorite/>{fav.length}</span></li>

            </ul>
        </header>
    );
}

export default Header;