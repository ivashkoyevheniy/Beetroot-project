import './Logo.css';
import logo from './../../assets/img/logo.png';
import { Link } from "react-router-dom";

export const Logo = () => {
    return (
        <Link to='/' className='logo-container'>
            <div className='logo-image-container'>
            <img
                alt='logo'
                className='logo-image'
                src={logo}>
            </img>
            </div>
            <span className='logo-title'>Mercury</span>
        </Link>
    );
}