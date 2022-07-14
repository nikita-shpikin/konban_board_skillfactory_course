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

  const disableButton = title => {
    switch (title) {
      case 'Backlog':
        return true;
      case 'Ready':
        return state.find(item => item.title === 'Backlog').tasks.length ? true : false;
      case 'In Progress':
        return state.find(item => item.title === 'Ready').tasks.length ? true : false;
      case 'Finished':
        return state.find(item => item.title === 'In Progress').tasks.length ? true : false;
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
        <>{disableButton(title)
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
