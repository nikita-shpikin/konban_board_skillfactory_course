import React, { useState, useEffect } from "react";
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Account from './components/account/Account';
import InsideTask from './components/insideTask/InsideTask';
import Login from './components/login/Login';
import NoPage from './components/NoPage/NoPage';
import './App.css';
import { AuthContext } from "./context";

function App() {
  const [state, setState] = useState([
    {
      title: 'Backlog', tasks: [],
    },
    {
      title: 'Ready', tasks: [],
    },
    {
      title: 'In Progress', tasks: [],
    },
    {
      title: 'Finished', tasks: [],
    }
  ]);

  useEffect(() => {
    const tasks = localStorage.getItem('state');
    if (!tasks) {
      return;
    } else {
      setState(JSON.parse(tasks));
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem('state', JSON.stringify(state));
  }, [state]);

  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true);
    }
  }, [])

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
    }}>
      <HashRouter>
        <Routes>
          {isAuth
            ? <Route path='/' element={<Header state={state} />}>
              <Route index element={<Account />} />
              <Route path='tasks' element={<Main state={state} setState={setState} />} />
              <Route path='tasks/task:id' element={<InsideTask state={state} setState={setState} />} />

              <Route path='*' element={<NoPage />} />
            </Route>
            : <Route path="/" element={<Login />} />
          }
        </Routes>
      </HashRouter>
    </AuthContext.Provider>
  );
}

export default App;
