import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';
import $ from 'jquery';
import DetailView from './DetailView';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onClickMoreInfo = this.onClickMoreInfo.bind(this);
  }

  onClickMoreInfo = e => {
    let info = e.target.id;
    console.log(info);
    let detail = $('.detail');
    let hero = $('.home-hero-img');
    let businessCard = $('.businessCard');
    businessCard.css('display', 'none');
    hero.css('display', 'none');
    detail.css('display', 'block');
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
          maxWidth: '750px',
          border: 'none',
          borderBottom: '1px solid gainsboro'
        }}>
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
          <div className="col-md-8">
            <div className="card-body ">
              <h5 className="card-title">{business.name}</h5>
              <p className="card-subtitle">{business.price}</p>
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
              <p className="card-subtitle mt-1"></p>
              <p className="card-text">
                {business.location.display_address[1]}
              </p>
            </div>
          </div>
        </div>
      </div>
    ));
    return (
      <div>
        <div className="row justify-content-center">{renderList}</div>
        <DetailView ref="child" />
      </div>
    );
  }
}

export default Card;
