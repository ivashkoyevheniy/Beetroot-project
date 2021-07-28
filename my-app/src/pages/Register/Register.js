import React from "react";
import { Header } from "../../components";
import { Form } from "../../assets/commonComponents";

export const Register = () => { 
  return (
    <div className="login">
      <div className="login__container">
        <Header/>
        <div className="login__title">
          Join<span className="login__title--blue"> us!</span>
        </div>
        <Form toggler={false}/>
      </div>
    </div>
  );
}