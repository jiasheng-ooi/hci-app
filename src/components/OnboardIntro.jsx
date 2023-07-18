import React from 'react';
import { Button } from '@mantine/core';

const Introduction = ({ onNextClick }) => {
  const handleFormSubmit = () => {
    onNextClick(); // Proceed to the first question
  };

  return (
    <div className="w-full h-2/3 flex flex-col items-start mt-8">
      <div className="font-bold mx-12 mt-8 text-left flex flex-col">
        <span className="text-black text-2xl">Welcome To</span>
        <div className="text-5xl mt-1">
          <span className="text-black">Park</span>
          <span className="text-blue-700">Finder.</span>
        </div>
      </div>
      <div className="mx-12 w-3/4 text-gray-800 text-lg item-center justify-center mt-8 leading-normal">
        Tell us more about you. Onboarding helps us better understand your preferences and optimize ParkFinder to suit your parking needs.
      </div>
      <div className='my-12 w-full text-center'>
        <Button
          className=" h-12 bg-brand-dark-blue text-white w-4/5 py-2 rounded-lg font-semibold text-lg"
          onClick={handleFormSubmit}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Introduction;
