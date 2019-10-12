import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';

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
        <div
          className="card mb-3"
          style={{ maxWidth: '540px' }}
          key={review.id}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <img
                src={review.user.image_url}
                className="card-img"
                alt={review.user.name + 'profile picture'}
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  objectFit: 'cover'
                }}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{review.user.name}</h5>
                <StarRatings
                  rating={review.rating}
                  starRatedColor="coral"
                  numberOfStars={5}
                  name="rating"
                  starDimension="20px"
                />
                <p className="card-text">
                  {review.text}{' '}
                  <a
                    href={review.url}
                    target="_blank"
                    rel="noopener noreferrer">
                    see more
                  </a>
                </p>
                <p className="card-text">
                  <small className="text-muted">{review.time_created}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      ));
    }
    console.log(this.props);
    return <div>{reviews}</div>;
  }
}

export default BusinessReviews;
