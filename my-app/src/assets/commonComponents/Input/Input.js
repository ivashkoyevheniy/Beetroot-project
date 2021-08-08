import "./Input.css";
import { iconCreator } from "./../../../utils";

export const Input = (props) => {
  const { placeholder, type, icon, onChange, inputName } = props;
  return (
    <div className="login-input">
      <div className="icon-container">{iconCreator(icon)}</div>
      <div className="login-input-container">
        <input
          type={type}
          placeholder={placeholder}
          onChange={e => onChange(inputName, e.target.value)}
          className="login-input-field"
          required
        ></input>
      </div>
    </div>
  );
};
