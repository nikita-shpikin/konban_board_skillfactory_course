import React, { useState } from 'react';
import add from './add.svg';
import style from './button.module.css';
import Input from '../input/Input';
import Dropdown from '../dropdown/Dropdown';

const Button = ({ children, tasks, title, state, ...props }) => {
  const [btnCondition, setBtnCondition] = useState(false);

  const getTitle = title => {
    if (title === 'Backlog') {
      return true;
    }
    return false;
  }

  function disableButton(tasks, title) {
    if (title === 'Backlog') {
      return true;
    }

    if (title === 'Ready') {

      let x = state.find(item => item.title === 'Backlog').tasks.length;
      if (x) {
        return true;
      }
      return false;

    }
    if (title === 'In Progress') {
      let x = state.find(item => item.title === 'Ready').tasks.length;
      if (x) {
        return true;
      }
      return false;

    }
    if (title === 'Finished') {
      let x = state.find(item => item.title === 'In Progress').tasks.length;
      if (x) {
        return true;
      }
      return false;

    }

  }

  return (
    <>
      {btnCondition
        ? <>
          {getTitle(title, tasks) ?
            <Input />
            :
            <Dropdown />
          }
        </>
        :
        <>{disableButton(tasks, title)
          ?
          <button className={style.button} onClick={() => setBtnCondition(true)}>
            <img src={add} alt={props.alt} />
            {children}
          </button>
          :
          <button className={style.button} style={{ opacity: 0.7 }}>
            <img src={add} alt={props.alt} />
            {children}
          </button>
        }
        </>
      }
    </>
  );
}

export default Button;
