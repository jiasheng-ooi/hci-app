import { React, useState, useCallback } from 'react'
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { renderToString } from 'react-dom/server';

const Map = () => {

    // Google Maps styling
    const containerStyle = {
        width: '100vw',
        height: '100vh'
    };

    const mapOptions = {
        zoom: 16,
        center: { lat: 1.3413, lng: 103.9638 },
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

    const markers = [
        { position: { lat: 1.3413, lng: 103.9638 }, color: '#E60000', label: 'SUTD' }, // sutd
        { position: { lat: 1.3433019907805732, lng: 103.96416792617076 }, color: '#0050E6', label: 'SUTD Hostel' }, //sutd hostel
        { position: { lat: 1.341707516705738, lng: 103.96514557439521 }, color: '#0050E6', label: 'SUTD Sports and Recreation Centre' }, //sutd recreation
        { position: { lat: 1.341435444980101, lng: 103.9650531473447 }, color: '#0050E6', label: 'SUTD Running Track' }, //sutd running
        { position: { lat: 1.3432532032844078, lng: 103.96218860022951 }, color: '#FF9933', label: 'You are here' }, // you are here
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
            {markers.map((marker, index) => (
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