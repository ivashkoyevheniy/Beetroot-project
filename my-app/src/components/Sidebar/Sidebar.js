import { Navigation } from '..';
import { Logo } from '../Logo/Logo';
import './Sidebar.css';

export const Sidebar = () => {
    return (
        <aside className='sidebar'>
            <Logo />
            <Navigation toggler={false} naviClass='sidebar__nav' />
        </aside>
    );
}