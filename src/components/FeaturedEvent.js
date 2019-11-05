import React, { Component } from 'react';

class FeaturedEvent extends Component {
  componentDidMount() {
    let url = new URL('https://api.yelp.com/v3/events/featured'),
      params = {
        location: 'San Francisco, CA'
      };
  }

  render() {
    return <div>Featured</div>;
  }
}

export default FeaturedEvent;
