import "./Login.css";
import React from "react";
import Button from "../../assets/commonComponents/Button/index.js";
import Header from "../../components/Header/Header";
import Input from "../../assets/commonComponents/Input/Input";
import loginIcon from './../../assets/img/login-icon.svg';
import passwordIcon from './../../assets/img/password-icon.svg';
import { iconCreator } from "../../utils";

export default function Login() {
  return (
    <div className="login">
      <div className="login__container">
        <Header></Header>
        <div className="login__title">
          Welcome<span className="login__title--blue"> back!</span>
        </div>
        <form className='login__form'>
        <div className="login__input">
          {iconCreator(loginIcon)}
          <Input placeholder="Username" type="text"></Input>
        </div>
        <div className="login__input">
          {iconCreator(passwordIcon)}
          <Input placeholder="Password" type="password"></Input>
        </div>
        <Button title="Enter"></Button>
        </form>
      </div>
    </div>
  );
}
