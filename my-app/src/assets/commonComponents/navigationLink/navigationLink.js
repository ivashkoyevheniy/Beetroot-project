import './navigationLink.css';
import { iconCreator } from '../../../utils';
import { NavLink } from 'react-router-dom';

export const NavigationLink = (props) => {
    const { linkClass, link, title, icon, toggler } = props;

   return (
        <div className='nav-link-container'> 
            {toggler && <div className='icon-container icon-container--nav'>{iconCreator(icon)}</div>}<NavLink className={linkClass} to={link}>{title}</NavLink>
        </div>
    );
}