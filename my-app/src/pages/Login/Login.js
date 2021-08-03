import "./Login.css";
import React from "react";
import { AuthLayout } from "../../components";
import { Form } from "../../assets/commonComponents";

export const Login = () => {
  return (
    <AuthLayout>
      <div className="login-title">
        Welcome<span className="login-title--blue"> back!</span>
      </div>
      <Form btnTitle='Login' toggler={true} />
    </AuthLayout>

  );
}