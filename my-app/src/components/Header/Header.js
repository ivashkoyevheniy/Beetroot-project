import { Navigation } from '..';
import { Logo } from '..';
import './Header.css';


export const Header = () => {
    return (
        <header className='header'>
            <Logo />
            <Navigation toggler={true} naviClass='login-auth-nav' />
        </header>
    );
}