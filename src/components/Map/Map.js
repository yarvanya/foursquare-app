import React from 'react';
import GoogleMapReact from 'google-map-react';
import './map.css';

const Marker = () => (
  <div className="drawnMarker"></div>
);

const API = {
  KEY_GOOGLE: 'AIzaSyBEf_H_vpLcCgnZT2Z_EQ4eGiq5THzGz1k',
  LANGUAGE: 'en'
};

const MAPDATA = {
  ZOOM: 15,
  LAT: 35.6895000,
  LNG: 139.6917100
};

const mapConfig = {
  center: [MAPDATA.LAT, MAPDATA.LNG],
  zoom: MAPDATA.ZOOM
};

class Maps extends React.Component {
  render() {

    const markers = this.props.venues.map((venue, i) => {
      const marker = {
        position: {
          lat: venue.location.lat,
          lng: venue.location.lng
        }
      }
      return <Marker key={i} lat={marker.position.lat} lng={marker.position.lng} />
    });

    return (
      <div className="mapContainer">
        <div className="mapElement">
          <GoogleMapReact     
            defaultCenter={mapConfig.center}
            defaultZoom={mapConfig.zoom}
            bootstrapURLKeys={{
              key: API.KEY_GOOGLE,
              language: API.LANGUAGE
            }}>
            { markers }
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default Maps;
