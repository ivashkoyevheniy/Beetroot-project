import React from "react";
import { AuthLayout } from "../../components";
import { Form } from "../../assets/commonComponents";

export const Register = () => {
  return (
    <AuthLayout>
      <div className="login-title">
        Join<span className="login-title--blue"> us!</span>
      </div>
      <Form btnTitle='Register' toggler={false} />
    </AuthLayout>
  );
}