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
        className="min-h-screen flex justify-center items-center p-8"
        style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: 720,
            height: 1280,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}
        >

        <div className="text-center flex-col" style={{ marginTop: '30vh' }}>
        <h1
          style={{
            fontSize: '3rem', // Equivalent to text-4xl
            fontWeight: 'bold', // Equivalent to font-bold
            marginBottom: '1.5rem', // Equivalent to mb-6
            color: 'white', // Equivalent to text-white
            textAlign: 'center',

          }}
        >
          ParkFinder.
        </h1>
            <Button
            style={{
                backgroundColor: 'white',
                color: 'navy',
                border: '1px solid black',
                borderRadius: '9999px',
                width: '15em', // Adjust the width to control the scale of the button
                height: '3em', // Adjust the height to control the scale of the button
                fontSize: '1.6em', // Scaled the font size
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.5em 1em', // Added padding to create a gap between the icon and text

            }}
            onMouseOver={(e) => (e.target.style.borderWidth = '2px')}
            onMouseOut={(e) => (e.target.style.borderWidth = '1px')}
            onClick={handleGoogleLogin}
            >
            <span style={{ fontSize: '1.6em', paddingRight: '0.5em' }}>
            <FcGoogle />
          </span>
            Log In with Google
            </Button>
        </div>
        </div>
    );
    };

    export default LoginPage;
