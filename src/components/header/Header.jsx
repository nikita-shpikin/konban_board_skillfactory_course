import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import style from './header.module.css';
import avatar from './avatar.svg';
import arrow from './arrow.svg';
import Footer from '../footer/Footer';

const Header = () => {
  const [state, setState] = useState(false);

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
              <Link to=''>My account</Link>
              <Link to='tasks'>My tasks</Link>
              <Link to=''>Log Out</Link>
            </div>
          </button>
        </div>
      </div>
      <Outlet />

      <Footer />
    </header>
  );
}

export default Header;
