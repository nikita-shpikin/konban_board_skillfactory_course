import React from 'react';
import style from './dropDown.module.css';

const Dropdown = ({ state, setState, title }) => {
  let selectTasks;
  if (title === 'Ready') {
    selectTasks = state.find(num => num.title === 'Backlog')
  } else if (title === 'In Progress') {
    selectTasks = state.find(num => num.title === 'Ready')
  } else if (title === 'Finished') {
    selectTasks = state.find(num => num.title === 'In Progress')
  }

  const movingTasks = () => {

  }

  return (
    <select
      className={style.select}
    // onChange={movingTasks}
    >
      {selectTasks.tasks.map(item => {
        return (
          <option
            className={style.option}
            value={item.task}
            key={item.id}
          >
            {item.task}
          </option>)
      })}
    </select >
  );
}

export default Dropdown;
