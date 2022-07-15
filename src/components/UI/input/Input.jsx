import React, { useState } from 'react';
import Button from '../button/Button';
import style from './input.module.css';

const Input = ({ state, setState, setBtnCondition }) => {
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');

  const addTask = () => {
    if (task.length > 0) {
      const newTask = state.map(num => {
        if (num.title === 'Backlog') {
          num.tasks.push({
            id: Date.now(),
            task: task,
            description: description,
            date: Date.now(),
          })
        }
        return num;
      })
      setState([...newTask]);
      setBtnCondition(false)
    }
  }

  return (
    <>
      <input type="text" className={style.input} onChange={e => setTask(e.target.value)} onKeyPress={e => e.key === 'Enter' ? addTask() : ''} />
      <textarea rows="5" className={style.textarea} onChange={e => setDescription(e.target.value)} />
      <Button className={style.button} onClick={addTask}>Submit</Button>
    </>
  );
}

export default Input;
