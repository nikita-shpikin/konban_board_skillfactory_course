import React from 'react';
import add from './add.svg';
import style from './button.module.css';

const Button = ({ children }) => {
  return (
    <button className={style.button}>
      <img src={add} alt="крестик добавить" />
      {children}
    </button>
  );
}

export default Button;
