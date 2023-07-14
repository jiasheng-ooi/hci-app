import React from 'react';

const LoginPage = () => {
  const handleLogin = () => {
    // Perform any necessary logic before redirecting to Google login
    // For example, you can validate user credentials, initiate an API call, etc.

    // Redirect the user to Google login
   
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Login Page</h1>
      <button
        className="px-8 py-3 bg-blue-500 text-white rounded-md font-semibold text-lg hover:bg-blue-600"
        onClick={handleLogin}
      >
        Login with Google
      </button>
    </div>
  );
};

export default LoginPage;
