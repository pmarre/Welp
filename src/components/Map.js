import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import { googleMapsApi } from '../config';

class MapContainer extends Component {
  render() {
    let businessLatitude = this.props.businessDetail.coordinates.latitude;
    let businessLongitude = this.props.businessDetail.coordinates.longitude;
    return (
      <Map
        google={this.props.google}
        zoom={15}
        style={{ width: '100%', height: '300px', position: 'relative' }}
        containerStyle={{ position: 'relative' }}
        initialCenter={{ lat: businessLatitude, lng: businessLongitude }}>
        <Marker
          position={{ lat: businessLatitude, lng: businessLongitude }}
          name={this.props.businessDetail.name}
        />
        <InfoWindow>
          <div>
            <h1>{this.props.businessDetail.name}</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: googleMapsApi
})(MapContainer);
