//  THIS USES GOOGLE MAPS API BUT I DONT HAVE THE KEY 
// YOUR TIME WILL COME
// 
// 
// 
import React from 'react';
import './MapView.css';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';



const containerStyle = {
    width: '100%',
    height: '700px'
  };
  
  const center = {
    lat: -3.745,
    lng: -38.523
  };
  
  function MapView() {
    const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: "AIzaSyDPaRnYnLwTso2RkDmRyja2JnxW4vMVsRI"
    })
  
    const [map, setMap] = React.useState(null)
  
    const onLoad = React.useCallback(function callback(map) {
      const bounds = new window.google.maps.LatLngBounds();
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
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
    ) : <></>
  }
  
  export default React.memo(MapView)








