import React from "react";
import { AuthLayout } from "../../components";
import { Form } from "../../assets/commonComponents";
import { registration } from "../../actions/regActions";
import { useHistory } from "react-router-dom";
import { routes } from "../../utils/routes";

export const Register = () => {
  const history = useHistory();
  const onHandleClick = (e, state)=> {
    const { password, confirmPassword} = state;
    e.preventDefault();
    if(password === confirmPassword) {
      alert("Your account succesfully created");
      registration(state)
      history.push(routes.loginOrHome);
    } else alert("Please enter the same password");
  }
  return (
    <AuthLayout>
      <div className="login-title">
        Join<span className="login-title--blue"> us!</span>
      </div>
      <Form onSubmit={onHandleClick} toggler={false}/>
    </AuthLayout>
  );
}