import React from 'react';
import Button from '../button/Button';
import style from './input.module.css';

const Input = () => {
  return (
    <>
      <input type="text" className={style.input} />
      <textarea name="" id="" cols="5" rows="5" className={style.textarea}></textarea>
      <Button className={style.button}>Submit</Button>
    </>
  );
}

export default Input;
