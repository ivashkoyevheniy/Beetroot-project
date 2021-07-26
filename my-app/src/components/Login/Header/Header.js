import './Header.css';
import Button from './Button/Button';
import Logo from './Logo/Logo';


export default function Header() {
    return (
        <header className='login__header'>
            <Logo></Logo>
            <nav class="login_auth-nav">
                <Button title='Register' class='login__nav-link' link='#'></Button>
                <Button title='Login' class='login__nav-link login__nav-link--active' link='#'></Button>
            </nav>
        </header>
    );
}