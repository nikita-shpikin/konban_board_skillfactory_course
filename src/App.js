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
import Loader from "./components/UI/loader/Loader";

function App() {
  const [state, setState] = useState([
    {
      title: 'Backlog',
      tasks: [],
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
    setState(JSON.parse(tasks))
  }, [])

  useEffect(() => {
    window.localStorage.setItem('state', JSON.stringify(state))
  }, [state]);

  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true);
    }
    setLoading(false);
  }, [])

  if (isLoading) {
    return <Loader />
  }

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
    }}>
      <HashRouter>
        <Routes>
          {isAuth
            ? <Route path='/' element={<Header />}>
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
