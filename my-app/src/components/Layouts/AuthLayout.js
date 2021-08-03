import React from "react";
import { Header } from "..";

export const AuthLayout = (props) => {
  return (
    <div className="login">
      <div className="login-container">
      <Header />
        {props.children}
      </div>
    </div>
  );
}