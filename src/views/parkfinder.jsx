import { React, useEffect,useState, useRef } from 'react';
import Map from '../components/map'
import Drawer from '../components/drawer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaSearch } from 'react-icons/fa';
import axios from 'axios'; // Import axios library



const ParkFinder = () => {
  // warning state
  const warnState = false;
  const [user_latitude, setUserLatitude] = useState(null);
  const [user_longitude, setUserLongitude] = useState(null);
  const isLocationAvailable = user_latitude !== null && user_longitude !== null;
  const trigger_search = useRef(true);
  const [token, setToken] = useState(null); //URA Api

  useEffect(() => {
    // Get the token and user's location when the page opens
    const retrieveTokenAndLocation = async () => {
      const accessKey = "03e56fbb-a5e7-4dd9-8573-ddd18abf04a5";
      const url = "https://www.ura.gov.sg/uraDataService/insertNewToken.action";
      console.log("Test")
      try {
        const response = await axios.post(url, {}, {
          headers: {
            "AccessKey": accessKey
          }
        });

        // Assuming the response contains a property named "Result" with the token value
        const token = response.data.Result;
        setToken(token);
        console.log("Token:", token); // Display the token in the console

        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords;
              setUserLatitude(latitude);
              setUserLongitude(longitude);
              console.log(`latitude is ${latitude}, longitude is ${longitude}`);
            },
            (error) => {
              console.error('Error getting user location:', error);
            }
          );
        } else {
          console.error('Geolocation is not supported by this browser.');
        }
      } catch (error) {
        console.error("Error retrieving token:", error.message);
        setToken(null);
      }
    };

    retrieveTokenAndLocation();
  }, []); 

  useEffect(() => {
    if (warnState) {
      // Display a toast notification when myState changes to true
      toast.error('Your chose carpark is getting crowded!', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    // Kelvin_change Get user's location on start-up of the page
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLatitude(latitude);
          setUserLongitude(longitude);
          console.log(`latitude is ${user_latitude}, longitude is ${user_longitude}`);
        },
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
    
    
  }, [warnState, user_latitude, user_longitude]); // these will load first 

  // Get user target location

  const [searchText, setSearchText] = useState('');

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      // The user pressed Enter, do something with the searchText value
      console.log('Search Text:', searchText);
      trigger_search.current.findPlaces(); 
    }
  };

  const handleButtonClick = (event) => {
    event.preventDefault();
    console.log(`Search Text: ${searchText}`);
    setSearchText(event.target.value)
    const searchBox = document.getElementById('search_box');
    // Kelvin trigger places search
    if (trigger_search.current) {
      trigger_search.current.findPlaces();
      console.log("Children component called")
    }
  };
    

  return (
    <div>
      {/* Drawer & Bottom Bar */}
      <div className="fixed bottom-0 w-full z-20">
        <Drawer/>
      </div>


      <div className="z-10 absolute top-10 left-0 right-0 flex items-center justify-center shadow-2xl">
        <div className="fixed w-5/6 mx-8 mt-12 flex items-center"> {/* flex container */}
          {/* Search Input */}
          {/* Kelvin Problem with text upon clicking the button */}
          <input
            type="text"
            placeholder= "Search..."
            className="w-full py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
            id = "search_box"
            value={searchText}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
          />
          {/* Search Button */}
          <button
            className="ml-4 bg-blue-500 text-white py-2 px-4 rounded-md focus:outline-none"
            onClick={handleButtonClick}
          >
            Search
          </button>
        </div>
      </div>
      <ToastContainer />
      {/* This ensures the user coords are available before loading */}
      {isLocationAvailable && token &&(
        <Map user_latitude={user_latitude} user_longitude={user_longitude} search_text={searchText} ref = {trigger_search}/>
      )}
    </div>
  );
};

export default ParkFinder;
