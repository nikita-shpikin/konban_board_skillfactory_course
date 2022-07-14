import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Account from './components/account/Account';
import './App.css';

function App() {
  const [state, setState] = useState([
    { title: 'Backlog', tasks: [] },
    { title: 'Ready', tasks: [] },
    { title: 'In Progress', tasks: [] },
    { title: 'Finished', tasks: [] },
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
