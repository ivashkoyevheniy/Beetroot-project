// import "../Login/Login.css";
import React from "react";
import Button from "../../assets/commonComponents/Button/index.js";
import Header from "../../components/Header/Header";
import Input from "../../assets/commonComponents/Input/Input";
import loginIcon from './../../assets/img/login-icon.svg';
import passwordIcon from './../../assets/img/password-icon.svg';
import emailIcon from './../../assets/img/email-icon.svg';
import { iconCreator } from "../../utils";

export default function Register() {
  return (
    <div className="login">
      <div className="login__container">
        <Header></Header>
        <div className="login__title">
          Join<span className="login__title--blue"> us!</span>
        </div>
        <form className='login__form'>
        <div className="login__input">
          {iconCreator(emailIcon)}
          <Input placeholder="Email" type="email"></Input>
        </div>
        <div className="login__input">
          {iconCreator(loginIcon)}
          <Input placeholder="Username" type="text"></Input>
        </div>
        <div className="login__input">
          {iconCreator(passwordIcon)}
          <Input placeholder="Password" type="password"></Input>
        </div>
        <div className="login__input">
          {iconCreator(passwordIcon)}
          <Input placeholder="Confirm password" type="password"></Input>
        </div>
        <Button title="Enter"></Button>
        </form>
      </div>
    </div>
  );
}