import React, { Component } from 'react';
import axios from 'axios';
import Card from './Card';

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

  fromChild1(params) {
    this.setState({
      businesses: params
    });
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
          Authorization:
            'Bearer BSHoa-Ky4u-KV6x0BAMflZXlUc480GhS-AMMDw9W5TJr3QZm6bjozXdrUOM8BF7AQeT7JJnfws4GDFJK3iEk67lin_xbU7Tp8oNeeDa1YWqobPHRd82lupSr2vGIXXYx'
        }
      }
    );

    this.setState({ businesses: response.data.businesses });
    this.id = this.state.businesses.map(item => item.id);
    console.log(this.state.businesses);
  };

  render() {
    return (
      <div>
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
          <div>Found {this.state.businesses.length} restaurants in </div>
        </form>
        <Card {...this.state} onSubmit={this.onSearchSubmit.bind(this)} />
      </div>
    );
  }
}

export default SearchBar;
