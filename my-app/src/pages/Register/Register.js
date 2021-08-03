import React from "react";
import { AuthLayout } from "../../components";
import { Form } from "../../assets/commonComponents";
import { registration } from "../../actions/regActions";

export const Register = () => {
  return (
    <AuthLayout>
      <div className="login-title">
        Join<span className="login-title--blue"> us!</span>
{/* export const Register = () => { 
  const onHandleClick = (e, state)=> {
    e.preventDefault();
    registration(state);
  }

  return (
    <div className="login">
      <div className="login-container">
        <Header/>
        <div className="login-title">
          Join<span className="login-title--blue"> us!</span>
        </div>
        <Form onSubmit={onHandleClick} toggler={false}/> */}
      </div>
      <Form btnTitle='Register' toggler={false} />
    </AuthLayout>
  );
}