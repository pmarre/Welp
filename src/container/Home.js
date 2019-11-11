import React, { Component } from 'react';

import Navigation from '../components/Navigation';
import SearchBar from '../components/SearchBar';
import FeaturedEvent from '../components/FeaturedEvent';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getUserLocation = location => {
    this.setState({
      updatedUserLocation: location
    });
  };
  render() {
    return (
      <div>
        <FeaturedEvent {...this.props} {...this.state} />
      </div>
    );
  }
}

export default Home;
