import React from 'react';
import style from './footer.module.css';

const Footer = ({ state }) => {
  let amountTasksFinished, amountTasksActive = 0;

  state.forEach(obj => {
    if (obj.title === 'Finished') {
      amountTasksFinished = obj.tasks.length;
    } else {
      amountTasksActive += obj.tasks.length;
    }
  })

  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.block}>
          <span className={style.text}>Active tasks: {amountTasksActive} </span>
          <span className={style.text}>Finished tasks: {amountTasksFinished} </span>
        </div>
        <div>
          <span className={style.text}>Kanban board by Nikita Shpikin, 2022</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
