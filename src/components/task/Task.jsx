import React from 'react';
import style from './task.module.css'

const Task = ({ children }) => {
  return (
    <a href='*' className={style.link}>
      {children}
    </a>
  );
}

export default Task;