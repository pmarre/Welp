import React, { Component } from 'react';
import $ from 'jquery';
import StarRatings from 'react-star-ratings';
import axios from 'axios';
import BusinessReviews from './BusinessReviews';

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
          Authorization:
            'Bearer BSHoa-Ky4u-KV6x0BAMflZXlUc480GhS-AMMDw9W5TJr3QZm6bjozXdrUOM8BF7AQeT7JJnfws4GDFJK3iEk67lin_xbU7Tp8oNeeDa1YWqobPHRd82lupSr2vGIXXYx'
        }
      }
    );
    this.setState({ businessReviews: response.data, status: true });
    console.log(this.state.businessReviews);
  };

  componentDidMount() {
    this.onGetReviews(this.props.businessDetail.id);
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
      <p key={address}>{address}</p>
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
        <div>{address}</div>
        {reviews}
      </div>
    );
  }
}

export default DetailViewCard;
