import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './containers/home.jsx';
import Login from './components/login.jsx';
import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
};

export default App;