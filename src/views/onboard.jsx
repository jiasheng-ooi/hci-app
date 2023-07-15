import React, { useState } from 'react';
import backgroundImage from '../assets/intro.jpg'; // Update the import path based on your folder structure


const OnboardingPage = () => {
  const [name, setName] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary logic with the form data
    // For example, you can send the data to an API, store it in state, etc.
    console.log(`Name: ${name}`);
  };

  return (
    <div className="container mx-auto px-4 max-w-sm">
      <h1 className="text-3xl font-bold mb-6">Onboarding Page</h1>
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
  );
};

export default OnboardingPage;
