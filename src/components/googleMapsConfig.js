import { useJsApiLoader } from '@react-google-maps/api';

const googleMapsLibraries = ['places'];

export const useGoogleMapsLoader = () => {
  return useJsApiLoader({
    googleMapsApiKey: 'AIzaSyAhY1RECYWhzJtChjr0iNIAV5NUFlljv9g',
    libraries: googleMapsLibraries,
  });
};
