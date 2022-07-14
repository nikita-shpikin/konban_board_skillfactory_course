import React from 'react';
import style from './dropDown.module.css';

const Dropdown = ({ x }) => {
  return (
    <select className={style.select}>
      {x.map(item => {
        return (
          <option
            className={style.option}
            value={item}
            key={item}
          >
            {item}
          </option>)
      })}
    </select >
  );
}

export default Dropdown;
