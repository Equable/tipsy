import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

class MapTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: [],
    };
    this.fetchPins = this.fetchPins.bind(this)
  }

  fetchPins(){
    fetch(`/api/v1/map/${this.props.cocktailId}`)
      .then(response => {
        if (response.ok) {
          return response
        } else {
          let errorMessage = `${response.status} (${response.statusText})`, error = new Error(errorMessage)
          throw (error)
        }
      })
      .then(response => response.json())
      .then(body => {
        this.setState({ locations: body })
      })
  }

  componentDidMount(){
    this.fetchPins()
  }
  render() {
    let curLng, curLat

    navigator.geolocation.getCurrentPosition((position)=>{
      curLng = position.coords.longitude
      curLat = position.coords.latitude
    })
    let googleMarkers = this.state.locations.map((location, index)=>{
      return(
        <Marker
          key={index}
          title={location.name}
          position={{ lat: location.lat, lng: location.lng }}
        />
      )
    })
    const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter={{ lat: curLat || 42.3601, lng: curLng || -71.0589 }}
        defaultZoom={13}
      >
        {googleMarkers}
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