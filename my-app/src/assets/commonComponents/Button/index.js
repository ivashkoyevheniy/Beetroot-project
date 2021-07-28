import './Button.css';
import React from "react";
import arrowRight from './../../img/right-arrow.svg';
import { iconCreator } from '../../../utils';

export default function Button({title}) {

    return (
        <div className='login__button-container'>
            <button type="button" className='btn btn-primary'>{title}
            </button>
            {iconCreator(arrowRight)}
        </div>
    );
}