import './Login.css';
import React from "react";
import Button from './Button/Button';
import Header from './Header/Header';
import Input from './Input/Input';
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineLock } from "react-icons/ai";


class UserIcon extends React.Component {
    render() {
        return <span className='login__user-icon'><AiOutlineUser /></span>
    }
}

class PasswordIcon extends React.Component {
    render() {
        return <span className='login__user-icon'><AiOutlineLock /></span>
    }
}

export default function Login() {
    return (
        <div className='login'>
            <div className='login__container'>
                <Header></Header>
                <div className='login__title'>Welcome<span className='login__title--blue'> back!</span>
                </div>
                <div className='login__input'>
                    <UserIcon></UserIcon>
                    <Input placeholder='Username' type='text'></Input>
                </div>
                <div className='login__input'>
                    <PasswordIcon></PasswordIcon>
                    <Input placeholder='Password' type='text'></Input>
                </div>
                <Button title='Enter'></Button>
            </div>
        </div>
    );
}