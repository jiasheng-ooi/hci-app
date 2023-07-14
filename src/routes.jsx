import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'

// Import your components for different pages
import LoginPage from './views/login.jsx';
import OnboardPage from './views/onboard.jsx';


const App = () => {
  return (
    <Routes>
        <Route  path="/login" element= {<LoginPage/>}  />
        <Route path="/onboard" element={<OnboardPage/>} />
    </Routes>
  );
};

export default App;
