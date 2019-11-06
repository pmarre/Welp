import React, { Component } from 'react';
import { yelpAPI } from '../config';

class FeaturedEvent extends Component {
  componentDidMount() {
    let url = new URL(
        'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/events/featured'
      ),
      params = {
        location: 'San Francisco, CA'
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
        console.log(response);
      });
  }

  render() {
    return <div>Featured</div>;
  }
}

export default FeaturedEvent;
