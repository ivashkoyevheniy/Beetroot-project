import React from 'react';
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import userIcon from "./../../img/user-icon.svg";
import passwordIcon from "./../../img/password-icon.svg";
import emailIcon from './../../img/email-icon.svg';

export const Form = ({ toggler }) => {

  return (
    <form className="login-form">
      {!toggler && <Input placeholder="Email" type="email" icon={emailIcon} />}
      <Input placeholder="Username" type="text" icon={userIcon} />
      <Input placeholder="Password" type="password" icon={passwordIcon} />
      {!toggler && <Input placeholder="Confirm password" type="password" icon={passwordIcon} />}
      <Button toggler={true} btnClass='btn btn-primary' title="Enter"></Button>
    </form>
  );
};