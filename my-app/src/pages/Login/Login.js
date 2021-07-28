import "./Login.css";
import React from "react";
import { Header } from "../../components";
import { Form } from "../../assets/commonComponents";

export const Login = () => {
  return (
    <div className="login">
      <div className="login__container">
        <Header/>
        <div className="login__title">
          Welcome<span className="login__title--blue"> back!</span>
        </div>
        <Form toggler={true}/>
      </div>
    </div>
  );
}
