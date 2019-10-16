import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { googleMapsApi } from '../config';

class MapContainer extends Component {
  render() {
    let businessLatitude = this.props.businessDetail.coordinates.latitude;
    let businessLongitude = this.props.businessDetail.coordinates.longitude;
    return (
      <Map
        google={this.props.google}
        zoom={15}
        style={{ width: '300px', height: '300px' }}
        initialCenter={{ lat: businessLatitude, lng: businessLongitude }}>
        <Marker position={{ lat: businessLatitude, lng: businessLongitude }} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: googleMapsApi
})(MapContainer);
