import './Input.css';
import { iconCreator } from "./../../../utils";

export const Input = (props) => {
    const {placeholder, type, icon} = props;
    return (
        <div className="login-input">
          <div className='icon-container'>{iconCreator(icon)}</div>
          <div className="login-input-container">
                <input type={type} placeholder={placeholder} className='login-input-field'>
                </input>
            </div>
        </div>
           
    );
}