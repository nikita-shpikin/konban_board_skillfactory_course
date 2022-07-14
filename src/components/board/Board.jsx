import React from 'react';
import Button from '../UI/button/Button';
import Task from '../task/Task';
import style from './board.module.css';

const Board = ({ state }) => {
  return (
    <>
      {state.map(item =>
        <div key={item.title} className={style.board}>
          <h2>{item.title}</h2>
          {item.tasks.map(item =>
            <Task key={item.id}>{item.task}</Task>
          )}
          <Button
            alt='+ add card'
            title={item.title}
            tasks={item.tasks}
            state={state}
          > add card </Button>
        </div>
      )}
    </>
  );
}

export default Board;
