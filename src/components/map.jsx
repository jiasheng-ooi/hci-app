import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const Map = () => {

    // Google Maps styling
    const containerStyle = {
        width: '720px',
        height: '1280px'
    };

    const center = {
        lat: -3.745,
        lng: -38.523
    };

    const { isLoaded } = useJsApiLoader({
        // id: 'google-map-script',
        // googleMapsApiKey: "AIzaSyBWvcQDLx5sbyKHzJCx6J3LEmAKVuhUHPI"
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);

        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            { /* Child components, such as markers, info windows, etc. */}
            <></>
        </GoogleMap>
    ) : <></>
};

export default Map;