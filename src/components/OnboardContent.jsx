import React, { useState } from 'react';
import Introduction from './OnboardIntro';
import Question1 from './Question1';
import Question2 from './Question2';

const OnboardingContent = () => {
  const [currentStep, setCurrentStep] = useState('INTRODUCTION');

  const handleNextClick = () => {
    if (currentStep === 'INTRODUCTION') {
      setCurrentStep('QUESTION1');
    } else if (currentStep === 'QUESTION1') {
      setCurrentStep('QUESTION2');
    }
    else if (currentStep === 'QUESTION2') {
      setCurrentStep('INTRODUCTION');

    }

  };

  const handleBackClick = () => {
    if (currentStep === 'QUESTION1') {
      setCurrentStep('INTRODUCTION');
    } else if (currentStep === 'QUESTION2') {
      setCurrentStep('QUESTION1');
    }
  };

  const handleFormSubmit = () => {
    // Perform any necessary logic with the form data
    // For example, you can send the data to an API, store it in state, etc.
    // For now, we'll just reset to the introduction
    setCurrentStep('INTRODUCTION');
  };

  return (
    <div className="absolute bottom-0 w-full h-2/3 bg-white rounded-t-3xl flex flex-col items-start mt-8">
      {currentStep === 'INTRODUCTION' && <Introduction onNextClick={handleNextClick} />}
      {currentStep === 'QUESTION1' && <Question1 onNextClick={handleNextClick} onBackClick={handleBackClick} />}
      {currentStep === 'QUESTION2' && <Question2 onNextClick={handleFormSubmit} onBackClick={handleBackClick}/>}
    </div>
  );
};

export default OnboardingContent;
