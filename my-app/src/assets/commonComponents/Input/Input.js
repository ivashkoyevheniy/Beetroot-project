import './Input.css';
import { iconCreator } from "./../../../utils";

export const Input = (props) => {
    const {placeholder, type, icon} = props;
    return (
        <div className="login__input">
          {iconCreator(icon)}
          <div className="login__input-container">
                <input type={type} placeholder={placeholder} className='login__input-field'>
                </input>
            </div>
        </div>
           
    );
}