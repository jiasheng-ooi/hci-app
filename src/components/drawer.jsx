import { React, useState } from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

// images
import Carpark1 from '../assets/carpark1.jpeg'
import Carpark2 from '../assets/carpark2.jpeg'
import Carpark3 from '../assets/carpark3.jpeg'
import Carpark4 from '../assets/carpark4.jpeg'
import Carpark5 from '../assets/carpark5.jpeg'
import Carpark6 from '../assets/carpark6.jpeg'

const Drawer = () => {
    // toggle state
    const [toggle, setToggle] = useState({
        bottom: false,
        loadedRows: 3
    });

    // load more results
    const handleLoadMore = () => {
        setToggle((prevState) => ({
            ...prevState,
            loadedRows: prevState.loadedRows + 3, // Increase the number of loaded rows by 3
        }));
    };

    // toggle open close drawer
    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setToggle({ ...toggle, [anchor]: open });
    };

    const anchor = 'bottom';

    // drawer style
    const drawerBleeding = 100;
    const drawerStyles = {
        '& .MuiDrawer-paper': {
            borderRadius: '25px 25px 0 0',
            boxShadow: 'none',

        },
    };

    // data about different carparks
    // crowd: 0-3 empty, 4-6 moderate, 7-9 busy, 9-12 very busy
    const [carparkInfo, setCarparkInfo] = useState([
        { img: Carpark1, name: 'SUTD Hostel', distance: 1.2, price: 3, crowd: 10 },
        { img: Carpark2, name: 'SUTD Sports and Recreation Centre Carpark', distance: 1, price: 2, crowd: 1 },
        { img: Carpark3, name: 'SUTD Running Track', distance: 2.1, price: 1.5, crowd: 5 },
        { img: Carpark4, name: '', distance: 1.2, price: 3, crowd: 10 },
        { img: Carpark5, name: 'Changi City Point', distance: 2, price: 4, crowd: 12 },
        { img: Carpark6, name: 'Changi Court', distance: 0, price: 3, crowd: 8 },
    ]);

    // sorting
    const handleSort = (property) => {
        const sortedCarparkInfo = [...carparkInfo]; // Create a copy of the array to avoid mutating the original array

        sortedCarparkInfo.sort((a, b) => {
            return a[property] - b[property]; // Sort in ascending order based on the selected property
        });
        setCarparkInfo(sortedCarparkInfo); // Update the carparkInfo state with the sorted array
    };

    // different pages
    const [activePage, setActivePage] = useState('page1');
    const handlePageChange = (page) => {
        setActivePage(page);
    }

    return (
        <div>
            <div
                style={{
                    paddingTop: '1rem',
                    width: '100%',
                    height: '4%',
                    position: 'fixed',
                    bottom: 0,
                    [anchor]: 0,
                    backgroundColor: 'white',
                    cursor: 'pointer',
                    zIndex: 999,
                    border: '1px solid white',
                    borderRadius: '25px 25px 0 0',
                }}
                onClick={toggleDrawer(anchor, true)}

            >
                <div className='mb-8 flex justify-center align-center'>
                    <div className='align-center w-12 bg-gray-400 h-1.5 rounded-xl'>       </div></div>

            </div>
            <SwipeableDrawer
                anchor={anchor}
                open={toggle[anchor]}
                onClose={toggleDrawer(anchor, false)}
                onOpen={toggleDrawer(anchor, true)}
                swipeAreaWidth={drawerBleeding}
                disableSwipeToOpen={false}
                ModalProps={{
                    keepMounted: true, // Ensure the drawer is rendered even when closed
                }}
                sx={drawerStyles}
            >
                {activePage === 'page1' && (
                    <div className="mx-12 my-4">
                        <div className='mb-8 flex justify-center align-center'>
                            <div className='align-center w-12 bg-gray-400 h-1.5 rounded-xl'>       </div></div>
                        <div>
                            <h5>Your chosen destination is:</h5>
                            <h2>Singapore University of Technology & Design</h2>
                        </div>
                        <div>
                            <h4>Recommendations</h4>

                            <select onChange={(e) => handleSort(e.target.value)}>
                                <option value="">
                                    Default
                                </option>
                                <option value="distance">
                                    Distance
                                </option>
                                <option value="price">
                                    Price
                                </option>
                                <option value="crowd">
                                    Crowd
                                </option>
                            </select>
                            {carparkInfo.slice(0, toggle.loadedRows).map((row, index) => {
                                return (
                                    <div key={index} className="flex" onClick={() => handlePageChange('page2')} >
                                        <div className="w-1/4">
                                            <img src={row.img} alt={row.name} />
                                        </div>
                                        <div className="w-3/4">
                                            <h3>{row.name}</h3>
                                            <p>{row.distance}km</p>
                                            <p>S${row.price}/entry</p>
                                            <p>{row.crowd}</p>
                                        </div>
                                    </div>
                                );
                            })}
                            {toggle.loadedRows < carparkInfo.length && (
                                <button onClick={handleLoadMore}>Load More</button>
                            )}
                        </div>

                    </div>
                )}

                {activePage === 'page2' && (
                    <div className="mx-12 my-4">
                        <div className='mb-8 flex justify-center align-center'>
                            <div className='align-center w-12 bg-gray-400 h-1.5 rounded-xl'>       </div></div>
                        <div>

                            <img src={Carpark1}></img>
                            <div>
                                <h2>Singapore University of Technology & Design</h2>
                            </div>
                            <div>
                                <p>distance</p>
                            </div>
                        </div>
                    </div>

                )}

            </SwipeableDrawer>
        </div>
    );
};

export default Drawer;
