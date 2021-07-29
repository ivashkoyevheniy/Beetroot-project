import React from "react";
import { Header } from "../../components";
import { Form } from "../../assets/commonComponents";

export const Register = () => { 
  return (
    <div className="login">
      <div className="login-container">
        <Header/>
        <div className="login-title">
          Join<span className="login-title--blue"> us!</span>
        </div>
        <Form toggler={false}/>
      </div>
    </div>
  );
}