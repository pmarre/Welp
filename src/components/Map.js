import React, { Component } from 'react';
import { Map, GoogleAPIWrapper, Marker } from 'google-maps-react';

class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={15}
        initialCenter={{ lat: 47.444, lng: -122.176 }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'API KEY'
})(MapContainer);
