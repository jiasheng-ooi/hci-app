import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Button } from '@mantine/core';
import backgroundImage from '../assets/login.jpg'; // Update the import path based on your folder structure

const LoginPage = () => {
  const handleGoogleLogin = () => {
    // Perform login with Google logic here
    console.log('Login with Google');
  };

  return (
    <div
      className="min-h-screen w-screen flex justify-center items-center bg-cover"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        height: 1280,
      }}
    >
      <div className="text-center flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-6 text-white">ParkFinder.</h1>
        <Button
          className="w-72 h-16 bg-white text-teal-950 text-xl font-semibold rounded-full text-lg flex items-center justify-center transform transition-transform hover:scale-110 hover: border-2 border-black"
          onClick={handleGoogleLogin}
        >
          <FcGoogle className="mr-3 text-3xl" />
          Log In with Google
        </Button>
      </div>
    </div>
  );
};

export default LoginPage;
