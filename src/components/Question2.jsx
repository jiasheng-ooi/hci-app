import React, { useState } from 'react';
import { Button } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

const Question2 = ({onBackClick}) => {
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
    <div className="w-full flex flex-col items-start my-8">
      {/* Content for Question 2 */}
      <div className="font-bold mx-10 mt-2 text-left flex flex-col">
      <div className='font-semibold underline text-lg mb-2' onClick={() => onBackClick()} >Back</div>
        <span className="text-brand-blue text-xl">Question 2</span>
        <span className='text-gray-800 text-4xl font-bold mt-4 leading-9'>Please select your preferred types of parking facilities.</span>
        <div className="text-brand-gray italic font-semibold mt-3">Please select all that apply.</div>

      </div>

      <div className="w-4/5 mx-auto mt-6 flex flex-wrap gap-3 justify-start">
        <Button
          className={`flex-1 h-10 border-2 text-brand-blue text-lg border-brand-blue hover:bg-brand-dark-blue hover:text-white hover:border-brand-dark-blue ${activeButtons.includes('Outdoor') ? 'border-brand-dark-blue bg-brand-dark-blue text-white' : 'bg-white'
            }`}
          onClick={() => handleButtonClick('Outdoor')}
        >
          Outdoor
        </Button>
        <Button
          className={`flex-1 h-10 border-2 text-brand-blue text-lg border-brand-blue hover:bg-brand-dark-blue hover:text-white hover:border-brand-dark-blue ${activeButtons.includes('Multi-Story') ? 'border-brand-dark-blue bg-brand-dark-blue text-white' : 'bg-white'
            }`}
          onClick={() => handleButtonClick('Multi-Story')}
        >
          Multi-Story
        </Button>
        <Button
          className={`flex-1 h-10 border-2 text-brand-blue text-lg border-brand-blue hover:bg-brand-dark-blue hover:text-white hover:border-brand-dark-blue ${activeButtons.includes('Underground') ? 'border-brand-dark-blue bg-brand-dark-blue text-white' : 'bg-white'
            }`}
          onClick={() => handleButtonClick('Underground')}
        >
          Underground
        </Button>
        <Button
          className={`flex-1 h-10 border-2 text-brand-blue text-lg border-brand-blue hover:bg-brand-dark-blue hover:text-white hover:border-brand-dark-blue ${activeButtons.includes('Valet') ? 'border-brand-dark-blue bg-brand-dark-blue text-white' : 'bg-white'
            }`}
          onClick={() => handleButtonClick('Valet')}
        >
          Valet
        </Button>
        <Button
          className={`flex-1 h-10 border-2 text-brand-blue text-lg border-brand-blue hover:bg-brand-dark-blue hover:text-white hover:border-brand-dark-blue ${activeButtons.includes('Roadside') ? 'border-brand-dark-blue bg-brand-dark-blue text-white' : 'bg-white'
            }`}
          onClick={() => handleButtonClick('Roadside')}
        >
          Roadside
        </Button>
        <Button
          className={`fflex-1 h-10 border-2 text-brand-blue text-lg border-brand-blue hover:bg-brand-dark-blue hover:text-white hover:border-brand-dark-blue ${activeButtons.includes('EV Charging Station') ? 'border-brand-dark-blue bg-brand-dark-blue text-white' : 'bg-white'
            }`}
          onClick={() => handleButtonClick('EV Charging Station')}
        >
          EV Charging Station
        </Button>
      </div>

      <div className='my-12 w-full text-center'>
        <Button
          className="h-12 bg-brand-dark-blue text-white w-4/5 py-2 rounded-lg font-semibold text-lg"
          onClick={handleFormSubmit}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Question2;
