import React, { useState } from 'react';
import style from './header.module.css';
import avatar from './avatar.svg';
import arrow from './arrow.svg';

const Header = () => {
  const [state, setState] = useState(true);

  return (
    <header className={style.header}>
      <div className={style.container}>
        <h1 className={style.title}>Awesome Kanban Board</h1>
        <div className={style.profile}>
          <img src={avatar} alt="аватар" />

          <button
            className={style.button}
            onClick={() => setState(!state)}
          >
            <img src={arrow} alt="стрелка" className={state ? style.arrow : ' '} />
            <div className={state ? style.menu : style.noMenu}>
              <a>My account</a>
              <a>My tasks</a>
              <a>Log Out</a>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
