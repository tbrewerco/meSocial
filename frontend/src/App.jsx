import { React, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home.jsx';
import LoginPage from './pages/loginPage.jsx';
import './App.css';

const App = () => {

  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
};

export default App;