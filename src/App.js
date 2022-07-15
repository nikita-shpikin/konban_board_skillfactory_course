import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Account from './components/account/Account';
import './App.css';

function App() {
  const [state, setState] = useState([
    {
      title: 'Backlog',
      tasks: [
        {
          id: 1,
          task: 'tutorial',
          description: 'инструкция',
          date: Date.now(),
        }
      ],
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

    const tasks = localStorage.getItem('state') || [];
    setState(JSON.parse(tasks))
  }, [])

  useEffect(() => {
    window.localStorage.setItem('state', JSON.stringify(state))
  }, [state]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<Account />} />
          <Route path='/tasks' element={<Main state={state} setState={setState} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
