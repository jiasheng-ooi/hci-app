import { React, useState, useCallback, useEffect , useRef, useImperativeHandle, forwardRef} from 'react'
import { GoogleMap, useJsApiLoader, Marker, InfoWindow, Googleapiwrapper} from '@react-google-maps/api';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { renderToString } from 'react-dom/server';

const Map = ({user_latitude,user_longitude,search_text} , ref) => {

    const [autocompleteService, setAutocompleteService] = useState(null);
    const [googleScriptLoaded, setGoogleScriptLoaded] = useState(false);
    useEffect(() => { // Add the opening parenthesis here
        // Load Google Places Autocomplete service script when the component mounts
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&libraries=places`;
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
    
        script.onload = () => {
        // Create an instance of Google Places Autocomplete service
        setAutocompleteService(new window.google.maps.places.AutocompleteService());
        setGoogleScriptLoaded(true);
        };
    }, []); // Make sure to provide an empty dependency array if this effect should run only once


     // Kelvin trigger search if text input is given
    // Expose the method to the parent component using the ref
    // useImperativeHandle(ref, () => ({
    //     initiate_target_search: () => {
    //       console.log('Search Triggered');
    //       if (googleScriptLoaded) {
    //         // Use the google object from the global window object
    //         const request = {
    //           location: new window.google.maps.LatLng(user_latitude, user_longitude),
    //           query: search_text,
    //           radius: 5000, // Search radius in meters (adjust as needed)
    //         };
    
    //         // Create an instance of the PlacesService
    //         const placesService = new window.google.maps.places.PlacesService(document.createElement('div'));
    
    //         // Perform the text search
    //         placesService.textSearch(request, (results, status) => {
    //           if (status === window.google.maps.places.PlacesServiceStatus.OK) {
    //             // Handle the search results here
    //             console.log(results);
    //           } else {
    //             // Handle the error, e.g., no results found or API request error
    //             console.error('Error fetching places:', status);
    //           }
    //         });
    //       }
    //     }
    //   }));


    // Google Maps styling
    const containerStyle = {
        width: '100vw',
        height: '85vh'
    };
    
    const mapOptions = {
        zoom: 24,
        center: { lat: user_latitude, lng: user_longitude }, // Kelvin Change to initialise from user position
        mapTypeControl: false,
        styles: [
            {
                featureType: 'poi',
                elementType: 'labels',
                stylers: [
                    { visibility: 'off' }, // Hide points of interest labels
                ],
            },
            {
                featureType: 'poi',
                elementType: 'geometry',
                stylers: [
                    { visibility: 'off' }, // Hide points of interest markers
                ],
            },
            {
                featureType: 'road',
                elementType: 'labels',
                stylers: [
                    { visibility: 'off' }, // Hide road labels
                ],
            },
            // Add more customizations as needed
        ],
    };

    // API keys
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBWvcQDLx5sbyKHzJCx6J3LEmAKVuhUHPI"
    })

    const [map, setMap] = useState(null)

    const onLoad = useCallback(function callback(map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(mapOptions.center);
        map.fitBounds(bounds);

        setMap(map)
    }, [])

    const onUnmount = useCallback(function callback(map) {
        setMap(null)
    }, [])

    // marker styling

    const user_marker = [

        // User Starting Position
        { position: { lat: user_latitude, lng: user_longitude }, color: '#FF9933', label: 'You are here' },// you are here


        // Carpark Positions
        { position: { lat: 1.3433019907805732, lng: 103.96416792617076 }, color: '#0050E6', label: 'SUTD Hostel' }, //sutd hostel
        { position: { lat: 1.341707516705738, lng: 103.96514557439521 }, color: '#0050E6', label: 'SUTD Sports and Recreation Centre' }, //sutd recreation
        { position: { lat: 1.341435444980101, lng: 103.9650531473447 }, color: '#0050E6', label: 'SUTD Running Track' } ,//sutd running


        // Target Position
        { position: { lat: 1.3413, lng: 103.9638 }, color: '#E60000', label: 'SUTD' }, // sutd

    ];

    const [selectedMarker, setSelectedMarker] = useState(null);
    

    const handleMarkerClick = (marker) => {
        setSelectedMarker(marker);
    };

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            options={mapOptions}
            onLoad={onLoad}
            onUnmount={onUnmount}
            zoom={16}
        >
            { /* Child components, such as markers, info windows, etc. */}
            {/* Main Marker */}
            {user_marker.map((marker, index) => (
                <Marker
                    key={index}
                    position={marker.position}
                    onClick={() => handleMarkerClick(marker)}
                    icon={{
                        url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
                            renderToString(
                                <IconContext.Provider value={{ color: marker.color }}>
                                    <FaMapMarkerAlt />
                                </IconContext.Provider>
                            )
                        )}`,
                        scaledSize: new window.google.maps.Size(35, 35),
                    }}
                />

            ))}
            {selectedMarker && (
                <InfoWindow
                    position={selectedMarker.position}
                    onCloseClick={() => setSelectedMarker(null)}
                >
                    <div className='font-medium text-brand-dark-blue'>{selectedMarker.label}</div>
                </InfoWindow>
            )}
        </GoogleMap>
    ) : <></>;

};

export default Map;