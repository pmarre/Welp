import React, { Component } from 'react';
import axios from 'axios';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateUserLocation } from '../actions/UserActions';

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
          Authorization:
            'Bearer BSHoa-Ky4u-KV6x0BAMflZXlUc480GhS-AMMDw9W5TJr3QZm6bjozXdrUOM8BF7AQeT7JJnfws4GDFJK3iEk67lin_xbU7Tp8oNeeDa1YWqobPHRd82lupSr2vGIXXYx'
        }
      }
    );
    this.setState({ businesses: response.data.businesses });
  };
  render() {
    console.log(this.props, 'searchbar');
    return (
      <form onSubmit={this.onSearchSubmit}>
        <div className="input-group">
          <input
            type="text"
            aria-label="searchItem"
            name="searchItem"
            className="form-control search"
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

const mapStateToProps = (state, props) => {
  return {
    searchItem: state.searchItem,
    userLocation: state.userLocation,
    locationPlusSearch: `${state.userLocation} ${props.randomProp}`
  };
};

const mapActionsToProps = (dispatch, props) => {
  console.log(props);
  return bindActionCreators(
    {
      onUpdateUserLocation: updateUserLocation
    },
    dispatch
  );
};

const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
  console.log(propsFromState, propsFromDispatch, ownProps);
  return {};
};

export default connect(
  mapStateToProps,
  mapActionsToProps,
  mergeProps
)(SearchBar);
