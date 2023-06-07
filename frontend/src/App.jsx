import { React, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home.jsx';
import LoginPage from './pages/loginPage.jsx';
import ErrorBoundary from './components/errorBoundary/errorBoundary.jsx';
import './App.css';

const App = () => {

  return (
    <ErrorBoundary >
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </ErrorBoundary >
  );
};

export default App;