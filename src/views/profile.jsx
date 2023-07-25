import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BsFillPinMapFill, BsPersonCircle } from "react-icons/bs"
import { HiOutlineAdjustmentsVertical } from "react-icons/hi2"
import { MdOutlineKeyboardArrowRight } from "react-icons/md"

import  ProfileImg  from ".././assets/profile.jpg"

const Profile = () => {
    const toMap = () => {
        console.log('Login with Google');
        navigate('/parkfinder');
    };

    const toOnboard = () => {
        navigate('/onboard');
    }

    const navigate = useNavigate();

    return (


        <div>
            <div className="h-full w-full">
                <div className="text-center mb-8 mt-16">
                    <img
                        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover	object-top"
                        src={ProfileImg}
                        alt="Profile"
                    />
                    <h2 className="text-4xl font-bold text-brand-dark-blue">John Doe</h2>
                    <p className="text-md text-brand-gray mt-2 font-medium">Joined: 25 July 2023</p>
                </div>
                <div className="mt-12 py-4 border-b border-brand-gray-blue hover:bg-gray-100">
                    <button className='flex flex-row w-full px-12' onClick={toOnboard}>
                        <HiOutlineAdjustmentsVertical className="text-3xl text-brand-green" />
                        <span className="ml-4 text-xl text-brand-dark-blue font-medium">Onboarding</span>
                        <MdOutlineKeyboardArrowRight className="ml-auto text-3xl text-brand-gray" />
                    </button>
                </div>
            </div>

            {/* Bottom Nav */}
            <div className="bg-brand-dark-blue w-full flex shadow-2xl fixed bottom-0">
                <button onClick={toMap} className="py-2 w-1/2 flex flex-col items-center justify-center text-gray-300 active:text-white active:bg-brand-blue">
                    <BsFillPinMapFill className="text-xl" />
                    Map
                </button>
                <button className="py-2 w-1/2 flex flex-col items-center justify-center text-white bg-brand-blue">
                    <BsPersonCircle className="text-xl" />
                    Profile
                </button>
            </div>

        </div>
    );
};

export default Profile;
