import React from 'react';
import Button from '../UI/button/Button';
import style from './login.module.css';

const Login = () => {
  return (
    <div className={style.login}>
      <form className={style.form}>
        <h1>Login</h1>
        <input type='text' placeholder='login' className={style.input} value='МойЛогин' />
        <input type='password' placeholder='password' className={style.input} value='Мой#Пароль@' />
        <Button className={style.button} >Sign in</Button>
      </form>
    </div>
  );
}

export default Login;
