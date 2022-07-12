import React from 'react';
import style from './footer.module.css';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.block}>
          <span className={style.text}>Active tasks: 0</span>
          <span className={style.text}>Finished tasks: 0</span>
        </div>
        <div>
          <span className={style.text}>Kanban board by Nikita Shpikin, 2022</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
