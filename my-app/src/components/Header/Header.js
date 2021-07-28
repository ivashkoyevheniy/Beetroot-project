import './Header.css';
import NavigationLink from '../../assets/commonComponents/navigationLink';
import Logo from '../Logo/Logo';


export default function Header() {
    return (
        <header className='login__header'>
            <Logo></Logo>
            <nav className="login_auth-nav">
                <NavigationLink title='Register' linkClass='login__nav-link' link='#'></NavigationLink>
                <NavigationLink title='Login' linkClass='login__nav-link login__nav-link--active' link='#'></NavigationLink>
            </nav>
        </header>
    );
}