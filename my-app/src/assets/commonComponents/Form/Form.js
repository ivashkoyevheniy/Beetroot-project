import React, { useState } from 'react';
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import userIcon from "./../../img/user-icon.svg";
import passwordIcon from "./../../img/password-icon.svg";
import emailIcon from './../../img/email-icon.svg';

export const Form = ({ toggler, btnTitle }) => {
// export const Form = ({ toggler , onSubmit}) => {
//   const initialState = {
//     email: '',
//     username: '',
//     password:'',
//     confirmPassword:''
//   }

  // const [state, setState] = useState(initialState);
  // const onHandleChange = (name, value) => {
  //   setState({...state, [name]: value})
  // };
    
  return (
    <form type='submit' className="login-form">
      {!toggler && <Input placeholder="Email" type="email" icon={emailIcon} />}
      <Input placeholder="Username" type="text" icon={userIcon} />
      <Input placeholder="Password" type="password" icon={passwordIcon} />
      {!toggler && <Input placeholder="Confirm password" type="password" icon={passwordIcon} />}
      <Button toggler={true} btnClass='btn btn-primary' title={btnTitle}></Button>
    {/* <form onSubmit={e => onSubmit(e, state)} className="login-form">
      {!toggler && <Input placeholder="Email" onChange={onHandleChange} inputName='email' type="email" icon={emailIcon} />}
      <Input placeholder="Username" type="text" onChange={onHandleChange}  inputName='username' icon={userIcon} />
      <Input placeholder="Password" type="password" onChange={onHandleChange} inputName='password' icon={passwordIcon} />
      {!toggler && <Input placeholder="Confirm password" onChange={onHandleChange} type="password" inputName='confirmPassword' icon={passwordIcon} />}
      <Button toggler={true} btnClass='btn btn-primary' title="Enter"></Button> */}
    </form>
  );
};