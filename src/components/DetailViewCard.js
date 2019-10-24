import React, { Component } from 'react';
import $ from 'jquery';
import StarRatings from 'react-star-ratings';
import axios from 'axios';
import BusinessReviews from './BusinessReviews';
import { yelpAPI } from '../config';
import MapContainer from './Map';

class DetailViewCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      businessReviews: {},
      status: false
    };
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

    let tags = businessDetail.categories.map((tag, index) => (
      <small className="subtitle" key={tag.alias}>
        {(index ? ', ' : '') + tag.title}
      </small>
    ));

    let businessHours = businessDetail.hours[0].open.map((hour, index) => {
      switch (index) {
        case 0:
          return (
            <li key={index} className="hours--list">
              <small>
                Sunday: {hour.start} - {hour.end}
              </small>
            </li>
          );
        case 1:
          return (
            <li key={index} className="hours--list">
              <small>
                Monday: {hour.start} - {hour.end}
              </small>
            </li>
          );
        case 2:
          return (
            <li key={index} className="hours--list">
              <small>
                Tuesday: {hour.start} - {hour.end}
              </small>
            </li>
          );
        case 3:
          return (
            <li key={index} className="hours--list">
              <small>
                Wednesday: {hour.start} - {hour.end}
              </small>
            </li>
          );
        case 4:
          return (
            <li key={index} className="hours--list">
              <small>
                Thursday: {hour.start} - {hour.end}
              </small>
            </li>
          );
        case 5:
          return (
            <li key={index} className="hours--list">
              <small>
                Friday: {hour.start} - {hour.end}
              </small>
            </li>
          );
        case 6:
          return (
            <li key={index} className="hours--list">
              <small>
                Saturday: {hour.start} - {hour.end}
              </small>
            </li>
          );
        default:
          return (
            <li key={index} className="hours--list">
              <small>
                {hour.start} - {hour.end}
              </small>
            </li>
          );
      }
    });

    return (
      <div className="detail mt-4">
        <div className="photo-container">{photos}</div>
        <div className="row justify-content-start mt-3">
          <div className="col-1">
            <button
              className="btn btn-danger mt-2 btn--submit"
              onClick={this.changeStatus}>
              Back
            </button>
          </div>
          <div className="col-8">
            <h1 className="heading mb-0">{businessDetail.name}</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-3 offset-md-8">
            <ul className="hour--list-group">{businessHours}</ul>
          </div>
        </div>

        <div className="row">
          <div className="col-8 offset-md-1">{tags}</div>
        </div>
        <div className="row justify-content-start">
          <div className="col-10 offset-sm-1">
            <StarRatings
              rating={businessDetail.rating}
              starRatedColor="coral"
              numberOfStars={5}
              name="rating"
              starDimension="20px"
            />
            <span className="align-text-top ml-1">
              {businessDetail.review_count} reviews
            </span>
          </div>
          <div className="col-4"></div>
        </div>
        <div className="row">
          <div className="col-8 offset-sm-1">
            {businessDetail.display_phone}
          </div>
        </div>
        <div className="row">
          <div className="col-8 offset-sm-1">{address}</div>
        </div>
        <div className="row mt-4">
          <div className="col-12">
            <MapContainer {...this.props} {...this.state} />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12">{reviews}</div>
        </div>
      </div>
    );
  }
}

export default DetailViewCard;
