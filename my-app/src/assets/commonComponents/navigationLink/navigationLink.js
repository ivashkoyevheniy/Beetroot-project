import './navigationLink.css';
import { iconCreator } from '../../../utils';
import { Link } from "react-router-dom";
import React, { useState } from 'react';

export const NavigationLink = ({ linkClass, link, title, icon, toggler, activeClass }) => {
    const [isActive, setActiveState] = useState(false);

    function clickHandler() {
        setActiveState(!isActive);
    }

    function getClassName() {
        return linkClass + ` ${isActive && activeClass}`;
    }

    return (
        <div className='nav-link-container'>
            {toggler && <div className='icon-container icon-container--nav'>{iconCreator(icon)}</div>}
            <Link to={link} className={getClassName()} onClick={clickHandler}>{title}</Link>
        </div>
    );
}