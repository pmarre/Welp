import React, { Component } from 'react';
import { yelpAPI } from '../config';

class FeaturedEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  }
  componentDidMount() {
    this.apiCall();
  }

  apiCall = () => {
    let url = new URL(
        'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/events'
      ),
      params = {
        location: this.props.updatedUserLocation
      };
    Object.keys(params).forEach(key => {
      url.searchParams.append(key, params[key]);
    });

    fetch(url, {
      headers: {
        Authorization: yelpAPI
      }
    })
      .then(res => res.json())
      .then(response => {
        this.setState({
          events: response.events
        });
      });
  };

  componentDidUpdate(prevProps) {
    if (prevProps.updatedUserLocation !== this.props.updatedUserLocation) {
      this.apiCall();
    }
  }

  render() {
    let events = this.state.events;
    console.log(events);
    let eventCards = events.map((event, i) => (
      <div
        key={i}
        className="card mr-auto"
        style={{ width: '30%', minWidth: '18rem' }}>
        <img
          src={event.image_url}
          className="card-img-top"
          alt="..."
          style={{
            width: 100 + '%',
            height: 15 + 'vw',
            objectFit: 'cover'
          }}
        />
        <div className="card-body">
          <h5 className="card-title">{event.name}</h5>
          <p className="card-text">{event.description}</p>
          <a
            href={event.event_site_url}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer">
            More info
          </a>
        </div>
      </div>
    ));
    return (
      <div className="col-10 offset-sm-1 mb-5">
        <div className="row justify-content-center mt-5 mb-3">
          <h1 className="text-center">
            Featured Events in {this.props.updatedUserLocation}
          </h1>
        </div>
        <div className="row">{eventCards}</div>
      </div>
    );
  }
}

export default FeaturedEvent;
