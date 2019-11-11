import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';

import DetailView from './DetailView';
import { Link } from 'react-router-dom';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onClickMoreInfo = e => {
    let info = e.target.id;
    this.props.callbackFromParent(info);
    this.refs.child.onDetailChange(info);
  };

  render() {
    let businesses = this.props.businesses;
    if (businesses == null) {
      return null;
    }

    let renderList = businesses.map(business => (
      <div
        className="card card-deck mb-4 businessCard pb-4"
        key={business.id}
        style={{
          width: '100%',
          border: 'none',
          borderBottom: '1px solid gainsboro'
        }}>
        <Link to={`/search/${business.id}`}>
          <div className="business-card row no-gutters">
            <div
              className="clickable-card"
              id={business.id}
              onClick={this.onClickMoreInfo}></div>
            <div className="col-md-4">
              <img
                src={business.image_url}
                className="card-img-top"
                alt={business.name}
                style={{
                  width: 100 + '%',
                  height: 15 + 'vw',
                  objectFit: 'cover',
                  borderRadius: '20px'
                }}
              />
            </div>
            <div className="col-md-5">
              <div className="card-body ">
                <h5 className="card-title mb-0">{business.name}</h5>
                <div className="row">
                  <div className="col-md-5">
                    <small className="card-subtitle">{business.price}</small>
                  </div>
                </div>
                <StarRatings
                  rating={business.rating}
                  starRatedColor="coral"
                  numberOfStars={5}
                  name="rating"
                  starDimension="20px"
                />
                <p className="card-subtitle mt-1">
                  {business.review_count} reviews
                </p>
              </div>
            </div>
            <div className="col-md-3 text-right justify-content-end">
              <div className="card-body ">
                <p className="card-subtitle mt-1"></p>
                <p className="card-text mb-0">{business.display_phone}</p>
                <p className="card-text">
                  {business.location.display_address[0]}
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    ));
    return (
      <div className="row justify-content-center">
        <div className="col-8" style={{ maxWidth: '850px' }}>
          {renderList}
        </div>
        <div>
          <DetailView ref="child" />
        </div>
      </div>
    );
  }
}

export default Card;
