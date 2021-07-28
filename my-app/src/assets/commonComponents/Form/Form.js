import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import loginIcon from "./../../img/login-icon.svg";
import passwordIcon from "./../../img/password-icon.svg";
import emailIcon from './../../img/email-icon.svg';

export const Form = ({ toggler }) => {
  return (
    <form className="login__form">
     {toggler && <Input placeholder="Username" type="text" icon={loginIcon} />} 
     {toggler && <Input placeholder="Password" type="password" icon={passwordIcon} />} 
     {toggler && <Button title="Enter"></Button>} 
     {!toggler &&  <Input placeholder="Email" type="email" icon={emailIcon} />}
     {!toggler &&  <Input placeholder="Username" type="text" icon={loginIcon} />}
     {!toggler &&  <Input placeholder="Password" type="password" icon={passwordIcon} />}
     {!toggler &&  <Input placeholder="Confirm password" type="password" icon={passwordIcon} />}
     {!toggler && <Button title="Enter"></Button>} 
    </form>
  );
};
