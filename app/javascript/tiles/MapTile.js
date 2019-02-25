import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

class MapTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: [],
      curLat: 0,
      curLng: 0,
    };
    this.fetchPins = this.fetchPins.bind(this)
  }

  getGeoLocation(){
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({curLat:position.coords.latitude ,curLng:position.coords.longitude})
    })
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
    this.getGeoLocation()
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
        defaultCenter={{ lat: this.state.curLat || 42.3601, lng: this.state.curLng || -71.0589 }}
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