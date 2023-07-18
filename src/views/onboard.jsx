import React, { useState } from 'react';
import backgroundImage from '../assets/intro.jpg'; // Update the import path based on your folder structure
import OnboardContent from '../components/OnboardContent.jsx'; // Import the OnboardingContent component

const OnboardingPage = () => {

  return (
    <div className="min-h-screen w-screen relative bg-cover" style={{ backgroundImage: `url(${backgroundImage})`, height: '100vh' }}>
      <OnboardContent />
    </div>
  );
};

export default OnboardingPage;
