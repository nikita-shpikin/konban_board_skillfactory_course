import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/header/Header";
import Main from "./components/main/Main";
// import Footer from "./components/footer/Footer";
import Account from './components/account/Account';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<Account />} />
          <Route path='/tasks' element={<Main />} />
        </Route>
        {/* <Route path="/footer" element={<Footer />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
