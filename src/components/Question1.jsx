import React, {useState } from 'react';
import { Button } from '@mantine/core';

const Question1 = ({ onNextClick }) => {
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
    <div className="w-full h-2/3 flex flex-col items-start mt-8">
      {/* Content for Question 1 */}
      <div className="font-bold ml-20 mt-16 text-left flex flex-col">
        <span className="text-blue-700 text-3xl mb-10">Question 1</span>
        <span className='text-gray-800 text-5xl font-bold mb-10'>Rank these factors when searching for a parking lot.</span>
      </div>
      <div>
  <div className="ml-20 text-slate-500 font-bold text-2xl mb-3">Price</div>
  <div className="flex mb-12">
    <Button
      className={`w-40 h-12 border-2 text-blue-600 text-xl border-blue-700 ml-20 mr-5 ${
        activePriceButton === 1 ? 'bg-green-200' : 'bg-white'
      }`}
      onClick={() => handlePriceClick(1)}
    >
      1
    </Button>
    <Button
      className={`w-40 h-12 border-2 border-blue-700 text-blue-600 text-xl mr-5 ${
        activePriceButton === 2 ? 'bg-green-200' : 'bg-white'
      }`}
      onClick={() => handlePriceClick(2)}
    >
      2
    </Button>
    <Button
      className={`w-40 h-12 text-blue-600 text-xl border-2 border-blue-700 ${
        activePriceButton === 3 ? 'bg-green-200' : 'bg-white'
      }`}
      onClick={() => handlePriceClick(3)}
    >
      3
    </Button>
  </div>

  <div className="ml-20 text-slate-500 font-bold text-2xl mb-3">Crowd</div>
  <div className="flex mb-12">
    <Button
      className={`w-40 h-12 border-2 text-blue-600 text-xl border-blue-700 ml-20 mr-5 ${
        activeCrowdButton === 1 ? 'bg-green-200' : 'bg-white'
      }`}
      onClick={() => handleCrowdClick(1)}
    >
      1
    </Button>
    <Button
      className={`w-40 h-12 border-2 border-blue-700 text-blue-600 text-xl mr-5 ${
        activeCrowdButton === 2 ? 'bg-green-200' : 'bg-white'
      }`}
      onClick={() => handleCrowdClick(2)}
    >
      2
    </Button>
    <Button
      className={`w-40 h-12 text-blue-600 text-xl border-2 border-blue-700 ${
        activeCrowdButton === 3 ? 'bg-green-200' : 'bg-white'
      }`}
      onClick={() => handleCrowdClick(3)}
    >
      3
    </Button>
  </div>

  <div className="ml-20 text-slate-500 font-bold text-2xl mb-3">Distance</div>
  <div className="flex ">
    <Button
      className={`w-40 h-12 border-2 text-blue-600 text-xl border-blue-700 ml-20 mr-5 ${
        activeDistanceButton === 1 ? 'bg-green-200' : 'bg-white'
      }`}
      onClick={() => handleDistanceClick(1)}
    >
      1
    </Button>
    <Button
      className={`w-40 h-12 border-2 border-blue-700 text-blue-600 text-xl mr-5 ${
        activeDistanceButton === 2 ? 'bg-green-200' : 'bg-white'
      }`}
      onClick={() => handleDistanceClick(2)}
    >
      2
    </Button>
    <Button
      className={`w-40 h-12 text-blue-600 text-xl border-2 border-blue-700 ${
        activeDistanceButton === 3 ? 'bg-green-200' : 'bg-white'
      }`}
      onClick={() => handleDistanceClick(3)}
    >
      3
    </Button>
  </div>

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

export default Question1;
