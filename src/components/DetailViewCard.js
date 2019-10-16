import React, { Component } from 'react';
import $ from 'jquery';
import StarRatings from 'react-star-ratings';
import axios from 'axios';
import BusinessReviews from './BusinessReviews';
import { yelpAPI } from '../config';

class DetailViewCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      businessReviews: {},
      status: false
    };
    this.changeStatus = this.changeStatus.bind(this);
    this.onGetReviews = this.onGetReviews.bind(this);
  }
  changeStatus = () => {
    this.props.callbackFromParent(false);
    $('.detail').css('display', 'none');
    $('.businessCard').css('display', 'block');
    $('.home-hero-img').css('display', 'block');
  };

  onGetReviews = async id => {
    let businessId = id;
    const response = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/${businessId}/reviews`,
      {
        headers: {
          Authorization: yelpAPI
        }
      }
    );
    this.setState({ businessReviews: response.data, status: true });
    console.log(this.state.businessReviews);
  };

  componentDidMount() {
    this.onGetReviews(this.props.businessDetail.id);
    let btn = $('.btn--submit');
    $(document).ready(function() {
      btn.on('scroll', e => {
        if (this.scrollTop > 200) {
          btn.addClass('position-fixed');
        } else {
          btn.removeClass('position-fixed');
        }
      });
    });
  }

  render() {
    let businessDetail = this.props.businessDetail;
    if (businessDetail == null) {
      return null;
    }

    let photos = businessDetail.photos.map(photo => (
      <img className="detail-images" key={photo} src={photo} alt={photo} />
    ));

    let reviews;
    if (this.state.status === true) {
      reviews = <BusinessReviews {...this.state} />;
    }

    let address = businessDetail.location.display_address.map(address => (
      <p className="mb-0" key={address}>
        {address}
      </p>
    ));

    return (
      <div className="container-fluid detail">
        <div className="photo-container">{photos}</div>
        <div className="row justify-content-start">
          <div className="col-1">
            <button
              className="btn btn-danger mt-2 btn--submit"
              onClick={this.changeStatus}>
              Back
            </button>
          </div>

          <div className="col-8">
            <div className="row justify-content-start">
              <div className="col-8">
                <h1 className="heading mb-0">{businessDetail.name}</h1>
              </div>
            </div>

            <div className="row justify-content-start ml-1">
              <StarRatings
                className="col-4"
                rating={businessDetail.rating}
                starRatedColor="coral"
                numberOfStars={5}
                name="rating"
                starDimension="20px"
              />
              <div className="col-4">
                <span className="align-text-top">
                  {businessDetail.review_count} reviews
                </span>
              </div>
            </div>
            <div>{businessDetail.display_phone}</div>
            <div>{address}</div>
            <div className="row justify-content-center">
              <div className="col-12">{reviews}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailViewCard;
