import { React, useEffect } from 'react';
import Map from '../components/map'
import Drawer from '../components/drawer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaSearch } from 'react-icons/fa';


const ParkFinder = () => {
  // warning state
  const warnState = false;

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
  }, [warnState]);

  return (
    <div>
      {/* Drawer & Bottom Bar */}
      <div className="fixed bottom-0 w-full z-20">
        <Drawer/>
      </div>


      <div className="z-10 absolute top-10 left-0 right-0 flex items-center justify-center shadow-2xl">
        {/* Search */}
        <div className="fixed w-5/6 mx-8 mt-12">
          <input
            type="text"
            placeholder="Search..."
            className="w-full py-2 px-4  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
          />
          <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-brand-blue text-lg" />
        </div>
      </div>
      <ToastContainer />

      <Map></Map>


    </div>
  );
};

export default ParkFinder;
