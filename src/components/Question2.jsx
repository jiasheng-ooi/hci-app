import React, { useState } from 'react';
import { Button } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

const Question2 = ({ onNextClick }) => {
  const navigate = useNavigate();
    const handleFormSubmit = () => {
        // Perform any necessary logic with the form data for question 1
        navigate('/parkfinder'); // Proceed to the next question
      };
    
    const [activeButtons, setActiveButtons] = useState([]);

    const handleButtonClick = (buttonNumber) => {
      if (activeButtons.includes(buttonNumber)) {
        setActiveButtons(activeButtons.filter((btn) => btn !== buttonNumber));
      } else {
        setActiveButtons([...activeButtons, buttonNumber]);
      }
    };

  return (
    <div className="w-full h-2/3 flex flex-col items-start mt-8">
      {/* Content for Question 2 */}
      <div className="font-bold ml-20 mt-16 text-left flex flex-col">
        <span className="text-blue-700 text-3xl mb-10">Question 2</span>
        <span className='text-gray-800 text-5xl font-bold mb-3 w-9/12'>Please select your preferred types of parking facilities.</span>
        <div className="text-slate-500 text-base font-medium mb-5">Please select all that apply.</div>

      </div>

      <div className="w-4/5 mx-auto mt-8 flex flex-wrap gap-5 justify-start">
      <Button
        className={`flex-1 h-12 border-2 text-blue-600 text-2xl border-blue-700 ${
          activeButtons.includes('Outdoor') ? 'bg-green-200' : 'bg-white'
        }`}
        onClick={() => handleButtonClick('Outdoor')}
      >
        Outdoor
      </Button>
      <Button
        className={`flex-1 h-12 border-2 text-blue-600 text-2xl border-blue-700 ${
          activeButtons.includes('Multi-Story') ? 'bg-green-200' : 'bg-white'
        }`}
        onClick={() => handleButtonClick('Multi-Story')}
      >
        Multi-Story
      </Button>
      <Button
        className={`flex-1 h-12 border-2 text-blue-600 text-2xl border-blue-700 ${
          activeButtons.includes('Underground') ? 'bg-green-200' : 'bg-white'
        }`}
        onClick={() => handleButtonClick('Underground')}
      >
        Underground
      </Button>
      <Button
        className={`flex-1 h-12 border-2 text-blue-600 text-2xl border-blue-700 ${
          activeButtons.includes('Valet') ? 'bg-green-200' : 'bg-white'
        }`}
        onClick={() => handleButtonClick('Valet')}
      >
        Valet
      </Button>
      <Button
        className={`flex-1 h-12 border-2 text-blue-600 text-2xl border-blue-700 ${
          activeButtons.includes('Roadside') ? 'bg-green-200' : 'bg-white'
        }`}
        onClick={() => handleButtonClick('Roadside')}
      >
        Roadside
      </Button>
      <Button
        className={`flex-1 h-12 border-2 text-blue-600 text-2xl border-blue-700 ${
          activeButtons.includes('EV Charging Station') ? 'bg-green-200' : 'bg-white'
        }`}
        onClick={() => handleButtonClick('EV Charging Station')}
      >
        EV Charging Station
      </Button>
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
