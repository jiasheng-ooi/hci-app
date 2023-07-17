import React from 'react';
import { Button } from '@mantine/core';

const Question2 = ({ onSubmit }) => {
  const handleFormSubmit = () => {
    // Perform any necessary logic with the form data for question 2
    onSubmit(); // Submit the form
  };

  return (
    <div className="w-full h-2/3 flex flex-col items-start mt-8">
      {/* Content for Question 2 */}
      <div className="font-bold ml-20 mt-16 text-left flex flex-col">
        <span className="text-black text-4xl">Question 2</span>
        {/* Add your question 2 content here */}
      </div>
      <Button
        className="w-80 h-12 fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-blue-950 rounded-lg text-lg items-center justify-center transform transition-transform hover:scale-110 border-2 border-black"
        onClick={handleFormSubmit}
      >
        Submit
      </Button>
    </div>
  );
};

export default Question2;
