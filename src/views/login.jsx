import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Button } from '@mantine/core';
import backgroundImage from '../assets/login.jpg'; // Update the import path based on your folder structure
import { Link, useNavigate } from 'react-router-dom';



const LoginPage = () => {
  const handleGoogleLogin = () => {
    // Perform login with Google logic here
    console.log('Login with Google');
    navigate('/onboard');  

  };

  const navigate = useNavigate();

  return (
    
    <div
      className=" flex justify-center items-center bg-cover"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        height: '100vh',
      }}
    >
             <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="z-0 text-center flex flex-col items-center">
        <h1 className="text-5xl font-bold mb-6 text-white">ParkFinder.</h1>
        <Button
          className="w-64 h-14 bg-white text-brand-dark-blue font-semibold rounded-full text-lg flex items-center justify-center transform transition-transform hover:scale-110 hover: border-2 border-black"
          onClick={handleGoogleLogin}
        >
          <FcGoogle className="mr-2 text-xl" />
          Log In with Google
        </Button>
      </div>
    </div>
  );
};

export default LoginPage;
