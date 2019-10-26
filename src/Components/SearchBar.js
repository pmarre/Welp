import React, { Component } from 'react';
import $ from 'jquery';
import ContentContainer from '../container/ContentContainer';
import { yelpAPI } from '../config';

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
      this.setState(props => ({
        userLocation: props.lat + ', ' + props.long
      }));
    }

    console.log(this.props.status);
  };

  componentDidMount() {
    this.getUserLocation();
  }

  handleChange = event => {
    let change = {};
    change[event.target.name] = event.target.value;
    this.setState(change);
  };

  onSearchSubmit = async e => {
    e.preventDefault();
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
        <ContentContainer
          {...this.state}
          onSubmit={this.onSearchSubmit.bind(this)}
        />
      </div>
    );
  }
}

export default SearchBar;
