import './Logo.css';
import logo from './../../assets/img/logo.png';
import { NavLink } from "react-router-dom";
import { routes } from "../../utils/routes";

export const Logo = () => {
    return (
        <NavLink to={routes.home} className='logo-container'>
            <div className='logo-image-container'>
            <img
                alt='logo'
                className='logo-image'
                src={logo}>
            </img>
            </div>
            <span className='logo-title'>Mercury</span>
        </NavLink>
    );
}