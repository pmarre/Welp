import React, { Component } from 'react';
import $ from 'jquery';
import StarRatings from 'react-star-ratings';

class DetailViewCard extends Component {
  constructor(props) {
    super(props);
    this.changeStatus = this.changeStatus.bind(this);
  }
  changeStatus = () => {
    this.props.callbackFromParent(false);
    $('.detail').css('display', 'none');
    $('.businessCard').css('display', 'block');
    $('.home-hero-img').css('display', 'block');
  };
  render() {
    let businessDetail = this.props.businessDetail;
    console.log(this.props);
    if (businessDetail == null) {
      return null;
    }

    let photos = businessDetail.photos.map(photo => (
      <div
        key={photo}
        style={{ backgroundImage: `url(${photo})`, backgroundSize: 'fill' }}
      />
    ));
    return (
      <div className="container-fluid detail">
        <div className="photo-container">{photos}</div>
        <div className="jumbotron justify-content-center">
          <h1 className="heading">{businessDetail.name}</h1>
        </div>
        <button className="btn btn-danger" onClick={this.changeStatus}>
          Back
        </button>
        <StarRatings
          rating={businessDetail.rating}
          starRatedColor="coral"
          numberOfStars={5}
          name="rating"
          starDimension="20px"
        />
        <div>{businessDetail.review_count}</div>
        <div>{businessDetail.display_phone}</div>
        <div>{businessDetail.location.address1}</div>
      </div>
    );
  }
}

export default DetailViewCard;
