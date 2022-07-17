import React from 'react';
import Button from '../UI/button/Button';
import style from './insideTask.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import back from './x.svg';

const InsideTask = ({ state }) => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const { id } = useParams();

  let findTask;
  const getTask = (obj) => {
    obj.tasks.find(item => {
      if (item.id == +id) {
        findTask = item;
      }
    })
  }

  for (let obj of state) {
    console.log(obj)
    getTask(obj)
  }
  //useMemo
  console.log(findTask)

  return (
    <div className={style.task}>
      <div className={style.wrapper}>

        <h2 className={style.title}>
          {findTask.task}
        </h2>

        <div className={style.text}>
          {findTask.description}
        </div>

        <Button onClick={goBack} className={style.back}>
          <img src={back} alt="back" />
        </Button>

      </div>
    </div>
  );
}

export default InsideTask;
