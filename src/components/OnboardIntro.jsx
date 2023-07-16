import React from 'react';
import { Button } from '@mantine/core';

const Introduction = ({ onNextClick }) => {
  const handleFormSubmit = () => {
    onNextClick(); // Proceed to the first question
  };

  return (
    <div className="w-full h-2/3 flex flex-col items-start mt-8">
      <div className="font-bold ml-20 mt-16 text-left flex flex-col">
        <span className="text-black text-4xl">Welcome To</span>
        <div className="text-6xl mt-5">
          <span className="text-black">Park</span>
          <span className="text-blue-700">Finder.</span>
        </div>
      </div>
      <div className="ml-20 w-3/4 text-gray-800 mx-auto text-3xl item-center justify-center mt-20 leading-normal">
        Tell us more about you. Onboarding helps us better understand your preferences and optimize ParkFinder to suit your parking needs.
      </div>
      <Button
        className="w-80 h-12 fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-blue-950 rounded-lg text-lg items-center justify-center transform transition-transform hover:scale-110 border-2 border-black"
        onClick={handleFormSubmit}
      >
        Next
      </Button>
    </div>
  );
};

export default Introduction;
