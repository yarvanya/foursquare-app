import React from 'react';
import GoogleMapReact from 'google-map-react';
import './map.css';

const API = {
  KEY_GOOGLE: 'AIzaSyBEf_H_vpLcCgnZT2Z_EQ4eGiq5THzGz1k',
  LANGUAGE: 'en'
};

const MAPDATA = {
  ZOOM: 12,
  LAT: 35.6895000,
  LNG: 139.6917100
};

const mapConfig = {
  center: [MAPDATA.LAT, MAPDATA.LNG],
  zoom: MAPDATA.ZOOM
};

class Maps extends React.Component {
  render() {
    return (
      <div className="mapContainer">
        <GoogleMapReact       
          defaultCenter={mapConfig.center}
          defaultZoom={mapConfig.zoom}
          bootstrapURLKeys={{
            key: API.KEY_GOOGLE,
            language: API.LANGUAGE
          }}>
        </GoogleMapReact>
      </div>
    );
  }
}

export default Maps;
