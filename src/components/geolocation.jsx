import React, { useEffect } from 'react';

const YourComponent = () => {
  useEffect(() => {
    if ("geolocation" in navigator) {
      console.log("Available");
      navigator.geolocation.getCurrentPosition(function(position) {
        console.log("Latitude is:", position.coords.latitude);
        console.log("Longitude is:", position.coords.longitude);
      });
    } else {
      console.log("Not Available");
    }
  }, []); // Empty dependency array means it will run once on component mount

  // Rest of your component code
  return (
    // Your JSX content goes here
  );
};

export default YourComponent;
