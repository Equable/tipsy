import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

class MapTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter={{ lat: 42.3601, lng: -71.0589 }}
        defaultZoom={13}
      >
      </GoogleMap>
    ));
    return (
      <div className="grid-x align-center">
        <GoogleMapExample
          containerElement={<div className="cell" style={{height: '500px', padding: '2rem'}}/>}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
};
export default MapTile;