import React, { useState } from 'react';
import add from './add.svg';
import style from './button.module.css';
import Input from '../input/Input';
import Dropdown from '../dropdown/Dropdown';

const Button = ({ children, ...props }) => {
  const [btnCondition, setBtnCondition] = useState(false);

  const getTitle = title => {
    if (title === 'Backlog') {
      return true;
    }
    return false;
  }

  return (
    <>
      {btnCondition
        ? <>
          {getTitle(props.title) ?
            <Input />
            :
            <Dropdown />
          }
        </>
        : 
        <button className={style.button} onClick={() => setBtnCondition(true)}>
          <img src={add} alt={props.alt} />
          {children}
        </button>
      }
    </>
  );
}

export default Button;
