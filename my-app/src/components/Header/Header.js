import { NavigationLink } from '../../assets/commonComponents';
import { Logo } from '../Logo/Logo';
import './Header.css';


export const Header = () => {
    return (
        <header className='login__header'>
            <Logo/>
            <nav className="login_auth-nav">
                <NavigationLink title='Register' linkClass='login__nav-link' link='#'></NavigationLink>
                <NavigationLink title='Login' linkClass='login__nav-link login__nav-link--active' link='#'></NavigationLink>
            </nav>
        </header>
    );
}