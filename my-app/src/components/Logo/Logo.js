import './Logo.css';
import logo from './../../assets/img/logo.png';

export const Logo = () => {
    return (
        <a href='#' className='logo-container'>
            <div className='logo-image-container'>
            <img
                alt='logo'
                className='logo-image'
                src={logo}>
            </img>
            </div>
            <span className='logo-title'>Mercury</span>
        </a>
    );
}