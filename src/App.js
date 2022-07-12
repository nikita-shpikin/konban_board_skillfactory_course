import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Account from './components/account/Account';
import './App.css';

function App() {
  const [state, setState] = useState([
    { title: 'Backlog', tasks: ['Login page – performance issues', 'Sprint bugfix', 'Sprint bugfix', 'Sprint bugfix', 'Sprint bugfix'] },
    { title: 'Ready', tasks: ['Shop page – performance issues'] },
    { title: 'In Progress', tasks: ['User page – performance issues'] },
    { title: 'Finished', tasks: ['Main page – performance issues'] },
  ]);

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
