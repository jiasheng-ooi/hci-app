import React, { useState } from 'react';
import { Button } from '@mantine/core';

const Question1 = ({ onNextClick, onBackClick }) => {
  const handleFormSubmit = () => {
    // Perform any necessary logic with the form data for question 1
    onNextClick(); // Proceed to the next question
  };
  const [activePriceButton, setPriceActiveButton] = useState(null);
  const [activeCrowdButton, setPriceCrowdButton] = useState(null);
  const [activeDistanceButton, setPriceDistanceButton] = useState(null);

  const handlePriceClick = (value) => {
    setPriceActiveButton(value);
    console.log("Price :" + value)
  }

  const handleCrowdClick = (value) => {
    setPriceCrowdButton(value);
    console.log("Crowd :" + value)
  }
  const handleDistanceClick = (value) => {
    setPriceDistanceButton(value);
    console.log("Distance :" + value)
  }


  return (
    <div className="w-full flex flex-col items-start my-8">
      {/* Content for Question 1 */}
      <div className="font-bold mx-10 mt-2 text-left flex flex-col">
        <div className='font-semibold underline text-lg mb-2' onClick={() => onBackClick()} >Back</div>
        <span className="text-brand-blue text-xl">Question 1</span>
        <span className='text-gray-800 text-4xl font-bold mt-4 leading-9'>Rank these factors when searching for a parking lot.</span>
      </div>
      <div>
        <div className="mx-10 text-slate-500 font-bold text-md mb-2 mt-8">Price</div>
        <div className="flex mb-6">
          <Button
            className={`w-24 h-8 border-2 text-brand-blue text-lg border-blue-700 ml-10 mr-2 hover:text-white hover:bg-brand-dark-blue hover:border-brand-dark-blue ${activePriceButton === 1 ? 'border-brand-dark-blue bg-brand-dark-blue text-white' : 'bg-white'
              }`}
            onClick={() => handlePriceClick(1)}
          >
            1
          </Button>
          <Button
            className={`w-24 h-8 border-2 text-brand-blue text-lg border-blue-700 mx-2 hover:text-white hover:bg-brand-dark-blue hover:border-brand-dark-blue ${activePriceButton === 2 ? 'border-brand-dark-blue bg-brand-dark-blue text-white' : 'bg-white'
              }`}
            onClick={() => handlePriceClick(2)}
          >
            2
          </Button>
          <Button
            className={`w-24 h-8 border-2 text-brand-blue text-lg border-blue-700 mx-2 hover:text-white hover:bg-brand-dark-blue hover:border-brand-dark-blue ${activePriceButton === 3 ? 'border-brand-dark-blue bg-brand-dark-blue text-white' : 'bg-white'
              }`}
            onClick={() => handlePriceClick(3)}
          >
            3
          </Button>
        </div>

        <div className="mx-10 text-slate-500 font-bold text-lg mb-2">Crowd</div>
        <div className="flex mb-6">
          <Button
            className={`w-24 h-8 border-2 text-brand-blue text-lg border-blue-700 ml-10 mr-2 hover:text-white hover:bg-brand-dark-blue hover:border-brand-dark-blue ${activeCrowdButton === 1 ? 'border-brand-dark-blue bg-brand-dark-blue text-white' : 'bg-white'
              }`}
            onClick={() => handleCrowdClick(1)}
          >
            1
          </Button>
          <Button
            className={`w-24 h-8 border-2 text-brand-blue text-lg border-blue-700 mx-2 hover:text-white hover:bg-brand-dark-blue hover:border-brand-dark-blue ${activeCrowdButton === 2 ? 'border-brand-dark-blue bg-brand-dark-blue text-white' : 'bg-white'
              }`}
            onClick={() => handleCrowdClick(2)}
          >
            2
          </Button>
          <Button
            className={`w-24 h-8 border-2 text-brand-blue text-lg border-blue-700 mx-2 hover:text-white hover:bg-brand-dark-blue hover:border-brand-dark-blue ${activeCrowdButton === 3 ? 'border-brand-dark-blue bg-brand-dark-blue text-white' : 'bg-white'
              }`}
            onClick={() => handleCrowdClick(3)}
          >
            3
          </Button>
        </div>

        <div className="mx-10 text-slate-500 font-bold text-lg mb-2">Distance</div>
        <div className="flex mb-8">
          <Button
            className={`w-24 h-8 border-2 text-brand-blue text-lg border-blue-700 ml-10 mr-2 hover:text-white hover:bg-brand-dark-blue hover:border-brand-dark-blue ${activeDistanceButton === 1 ? 'border-brand-dark-blue bg-brand-dark-blue text-white' : 'bg-white'
              }`}
            onClick={() => handleDistanceClick(1)}
          >
            1
          </Button>
          <Button
            className={`w-24 h-8 border-2 text-brand-blue text-lg border-blue-700 mx-2 hover:text-white hover:bg-brand-dark-blue hover:border-brand-dark-blue ${activeDistanceButton === 2 ? 'border-brand-dark-blue bg-brand-dark-blue text-white' : 'bg-white'
              }`}
            onClick={() => handleDistanceClick(2)}
          >
            2
          </Button>
          <Button
            className={`w-24 h-8 border-2 text-brand-blue text-lg border-blue-700 mx-2 hover:text-white hover:bg-brand-dark-blue hover:border-brand-dark-blue ${activeDistanceButton === 3 ? 'border-brand-dark-blue bg-brand-dark-blue text-white' : 'bg-white'
              }`}
            onClick={() => handleDistanceClick(3)}
          >
            3
          </Button>
        </div>

      </div>
      <div className='mb-12 w-full text-center'>
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

export default Question1;
