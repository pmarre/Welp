import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let businesses = this.props.businesses;
    if (businesses == null) {
      return null;
    }

    let renderList = businesses.map(business => (
      <div
        className="col-xs-12 col-sm-6 col-lg-4 card-deck mb-3"
        key={business.id}>
        <div
          className="business-card card text-center"
          style={{ width: 18 + 'rem' }}>
          <img
            src={business.image_url}
            className="card-img-top"
            alt={business.name}
            style={{ width: 100 + '%', height: 15 + 'vw', objectFit: 'cover' }}
          />
          <div className="card-body">
            <h5 className="card-title">{business.name}</h5>
            <p className="card-subtitle">{business.price}</p>
            <StarRatings
              rating={business.rating}
              starRatedColor="coral"
              numberOfStars={5}
              name="rating"
              starDimension="20px"
            />
            <p className="card-subtitle mt-1"></p>
            <p className="card-text">{business.location.display_address[1]}</p>
            <a href={business.url} className="btn btn-primary" target="blank">
              Go to Website
            </a>
          </div>
        </div>
      </div>
    ));
    return <div className="row">{renderList}</div>;
  }
}

export default Card;
