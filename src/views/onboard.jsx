import React, { useState } from 'react';

const OnboardingPage = () => {
  const [name, setName] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary logic with the form data
    // For example, you can send the data to an API, store it in state, etc.
    console.log(`Name: ${name}`);
  };

  return (
    <div
      className="min-h-screen flex justify-center items-center p-8"
      style={{
        width: 720,
        height: 1280,
      }}
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6">Onboarding Page</h1>
        <form className="space-y-4" onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="name" className="block font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600"
          >
            Complete Onboarding
          </button>
        </form>
      </div>
    </div>
  );
};

export default OnboardingPage;
