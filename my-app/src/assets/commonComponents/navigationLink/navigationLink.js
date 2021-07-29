import './navigationLink.css';
import { iconCreator } from '../../../utils';

export const NavigationLink = (props) => {
    const { linkClass, link, title, icon, toggler } = props;

   return (
        <div className='nav-link-container'> 
            {toggler && <div className='icon-container icon-container--nav'>{iconCreator(icon)}</div>}<a className={linkClass} href={link}>{title}</a>
        </div>
    );
}