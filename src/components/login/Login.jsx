import React, { useContext } from 'react';
import { AuthContext } from '../../context';
import Button from '../UI/button/Button';
import style from './login.module.css';

const Login = () => {
  const { setIsAuth } = useContext(AuthContext);
  const signIn = e => {
    e.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', 'true');
  }

  return (
    <div className={style.login}>
      <form className={style.form} onSubmit={signIn}>
        <h1>Login</h1>
        <input type='text' placeholder='login' className={style.input} defaultValue='МойЛогин' autoComplete="on" />
        <input type='password' placeholder='password' className={style.input} defaultValue='Мой#Пароль@' autoComplete="on" />
        <Button className={style.button} >Sign in</Button>
      </form>
    </div>
  );
}

export default Login;
