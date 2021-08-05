import "./Login.css";
import React from "react";
import { AuthLayout } from "../../components";
import { Form } from "../../assets/commonComponents";
import { login } from "../../actions/regActions";

export const Login = () => {
  const onHandleClick = (e, state)=> {
    e.preventDefault();
    login(state);
  }

  return (
    <AuthLayout>
      <div className="login-title">
        Welcome<span className="login-title--blue"> back!</span>
      </div>
        <Form onSubmit={onHandleClick} toggler={true}/>
    </AuthLayout>

  );
}