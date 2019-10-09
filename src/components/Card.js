import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';
import $ from 'jquery';
import { Link } from 'react-router-dom';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onClickMoreInfo = this.onClickMoreInfo.bind(this);
  }

  onClickMoreInfo = e => {
    let info = e.target.id;
    let businessCard = $('.businessCard');
    businessCard.css('display', 'none');
    this.props.callbackFromParent(info);
  };

  render() {
    let businesses = this.props.businesses;
    if (businesses == null) {
      return null;
    }

    let renderList = businesses.map(business => (
      <div
        className="col-xs-12 col-sm-6 col-lg-4 card-deck mb-3 businessCard"
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
            <Link
              onClick={this.onClickMoreInfo}
              to={business.alias}
              className="btn btn-primary"
              id={business.id}>
              More info
            </Link>
          </div>
        </div>
      </div>
    ));
    return <div className="row justify-content-center">{renderList}</div>;
  }
}

export default Card;
