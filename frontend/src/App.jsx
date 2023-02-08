import { React, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './containers/home.jsx';
import LoginPage from './containers/loginPage.jsx';
import SignupPage from './containers/signupPage.jsx';
import { gapi } from 'gapi-cjs';
import './App.css';

const App = () => {

  useEffect(() => {
    function start() {
      gapi.auth2.init({
        clientId: import.meta.env.VITE_REACT_APP_GOOGLE_CLIENT_ID,
        scope: ''
      });
    };
    gapi.load('client:auth2', start);
  });


  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="signup" element={<SignupPage />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
};

export default App;