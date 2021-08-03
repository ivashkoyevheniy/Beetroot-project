import './Button.css';
import React from "react";
import arrowRight from './../../img/right-arrow.svg';
import { iconCreator } from '../../../utils';

export const Button = ( props ) => {
    const { btnClass, title, toggler, btnHandle } = props;
    return (
        <div className='button-container'>
            <button onClick={btnHandle} type="sumbit" className={btnClass}>{title}</button>
            {toggler && <div className='icon-container icon-container--button'>{iconCreator(arrowRight)}</div>}
        </div>
    );
}