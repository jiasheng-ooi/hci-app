import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'

// Import your components for different pages
import LoginPage from './views/login.jsx';
import OnboardPage from './views/onboard.jsx';
import ParkFinder from './views/parkfinder.jsx';
import Profile from './views/profile.jsx';


const App = () => {
  return (
    <Routes>
        <Route path="/" element= {<LoginPage/>}  />
        <Route path="/onboard" element={<OnboardPage/>} />
        <Route path="/parkfinder" element={<ParkFinder/>} />
        <Route path="/profile" element={<Profile/>}/>

    </Routes>
  );
};

export default App;
