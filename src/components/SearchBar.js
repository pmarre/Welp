import React, { Component } from 'react';
import $ from 'jquery';
import ContentContainer from '../container/ContentContainer';
import FilterContainer from '../container/FilterContainer';
import { yelpAPI, googleMapsApi } from '../config';
import { withRouter, Redirect } from 'react-router-dom';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchItem: '',
      userLocation: '',
      businesses: []
    };
  }

  getUserLocation = () => {
    if (this.props.status === false) {
      this.setState({ userLocation: 'San Francisco, CA' });
    } else {
      fetch(
        `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.props.lat},${this.props.long}&key=${googleMapsApi}`
      )
        .then(res => res.json())
        .then(response => {
          let addresses = [];
          let addressComponents = [];

          response.results.map(address => addresses.push(address));
          addresses[0].address_components.map(addComp =>
            addressComponents.push(addComp)
          );
          let cityState = `${addressComponents[2].long_name}, ${addressComponents[4].short_name}`;
          this.setState({
            userLocation: cityState,
            status: true
          });
          this.props.passUserLocation(this.state.userLocation);
        });
    }
  };

  componentDidMount() {
    this.getUserLocation();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.status !== this.props.status) {
      this.getUserLocation();
    }
  }

  handleChange = event => {
    let change = {};
    change[event.target.name] = event.target.value;
    this.setState(change);
  };

  redirectRouter = () => {
    this.props.history.push(`/search`);
    return <Redirect to="/search" />;
  };

  onSearchSubmit = async e => {
    e.preventDefault();
    this.redirectRouter();
    let searchTerm = this.state.searchItem.replace(' ', '+');
    let searchLocation = this.state.userLocation.replace(' ', '+');
    searchLocation = searchLocation.replace(',', '');
    this.props.history.push({
      pathname: 'search',
      search: `term =${searchTerm}&amp;location=${searchLocation}`
    });

    let heroImg = $('.home-hero-img');
    heroImg.css('height', '20vh');
    let searchItem = this.state.searchItem;
    let userLocation = this.state.userLocation;

    let url = new URL(
        'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search'
      ),
      params = {
        term: searchItem,
        location: userLocation
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
        this.setState({ businesses: response.businesses });

        this.id = this.state.businesses.map(item => item.id);
      });
  };

  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="jumbotron home-hero-img">
            <form
              onSubmit={this.onSearchSubmit}
              className="searchBar"
              autoComplete="off">
              <div className="input-group">
                <input
                  type="text"
                  aria-label="searchItem"
                  name="searchItem"
                  className="form-control"
                  placeholder="Tacos, barber, plumber, brewery..."
                  value={this.state.value}
                  onChange={this.handleChange}
                />
                <input
                  type="text"
                  aria-label="userLocation"
                  name="userLocation"
                  className="form-control"
                  placeholder="San Francisco, CA"
                  value={this.state.userLocation}
                  onChange={this.handleChange}
                />
                <div className="input-group-append">
                  <input
                    type="submit"
                    value="Search"
                    className="btn btn-danger input-group-text btn-custom-submit"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <FilterContainer {...this.state} />
        <ContentContainer {...this.state} onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default withRouter(SearchBar);
