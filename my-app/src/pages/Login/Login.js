import "./Login.css";
import React from "react";
import { Header } from "../../components";
import { Form } from "../../assets/commonComponents";

export const Login = () => {
  return (
    <div className="login">
      <div className="login-container">
        <Header />
        <div className="login-title">
          Welcome<span className="login-title--blue"> back!</span>
        </div>
        <Form toggler={true}/>
      </div>
    </div>
  );
}