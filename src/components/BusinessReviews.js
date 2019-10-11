import React, { Component } from 'react';

class BusinessReviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: this.props.status
    };
  }

  render() {
    let businessReviews = this.props.businessReviews;
    let reviews;
    if (this.state.status === true) {
      reviews = businessReviews.reviews.map(review => (
        <p key={review.id}>
          {review.text}{' '}
          <a href={review.url} target="_blank" rel="noopener noreferrer">
            see more
          </a>
        </p>
      ));
    }
    console.log(this.props);
    return <div>{reviews}</div>;
  }
}

export default BusinessReviews;
