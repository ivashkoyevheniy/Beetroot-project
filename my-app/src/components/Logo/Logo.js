import './Logo.css';
import logo from './../../assets/img/logo.png';


export default function Logo() {
    return (
        <div className='login__logo-container'>
            <img
                alt='logo'
                className='login__logo-image'
                src={logo}>
            </img>
            <span className='login__logo-title'>Mercury</span>
        </div>
    );
}