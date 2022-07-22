import React from 'react';
import style from './account.module.css';
import avatar from '../header/avatar.svg';

const Account = () => {
  return (
    <div className={style.account}>
      <div className={style.container}>
        <div className={style.wrapper}>
          <img src={avatar} alt="avatar" className={style.avatar} />
          <h2>My account</h2>
          <span className={style.subText}>name</span>
          <span className={style.text}>Nikita</span>
          <span className={style.subText}>surname</span>
          <span className={style.text}>Shpikin</span>
          <span className={style.subText}>favorite color</span>
          <span className={style.text}>purpur</span>
        </div>
      </div>
    </div>
  );
}

export default Account;
