import './Button.scss';
import React from "react";
import { FaChevronRight } from 'react-icons/fa';


class ArrowRight extends React.Component {
  render() {
    return <span className='login__button-icon'><FaChevronRight /></span>
  }
}

export default function Button(props) {
    return (
        <div className='login__button-container'>
            <button type="button" className='btn btn-primary'>{props.title}
            <ArrowRight></ArrowRight>
            </button>
        </div>
    );
}