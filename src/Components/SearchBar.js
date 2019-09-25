import React, { Component } from 'react';
import axios from 'axios';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchItem: '',
      userLocation: '',
      businesses: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }

  handleChange = event => {
    let change = {};
    change[event.target.name] = event.target.value;
    this.setState(change);
  };

  onSearchSubmit = async e => {
    e.preventDefault();
    let searchItem = this.state.searchItem;
    let userLocation = this.state.userLocation;
    const response = await axios.get(
      'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search',
      {
        params: {
          term: searchItem,
          location: userLocation
        },
        headers: {
          Authorization: 'Bearer API KEY'
        }
      }
    );

    this.setState({ businesses: response.data.businesses });
  };
  render() {
    return (
      <form onSubmit={this.onSearchSubmit}>
        <div className="input-group">
          <input
            type="text"
            aria-label="searchItem"
            name="searchItem"
            className="form-control"
            placeholder="Tacos, pizza, etc..."
            value={this.state.value}
            onChange={this.handleChange}
          />
          <input
            type="text"
            aria-label="userLocation"
            name="userLocation"
            className="form-control"
            placeholder="San Francisco, CA"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <div className="input-group-append">
            <input
              type="submit"
              value="Search"
              className="btn btn-outline input-group-text"
            />
          </div>
        </div>
        <div>Found {this.state.businesses.length} restaurants</div>
      </form>
    );
  }
}

export default SearchBar;
