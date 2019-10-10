import React, { Component } from 'react';
import $ from 'jquery';

class DetailViewCard extends Component {
  constructor(props) {
    super(props);
    this.changeStatus = this.changeStatus.bind(this);
  }
  changeStatus = () => {
    this.props.callbackFromParent(false);
    $('.detail').css('display', 'none');
    $('.businessCard').css('display', 'block');
  };
  render() {
    let businessDetail = this.props.businessDetail;
    console.log(this.props);
    if (businessDetail == null) {
      return null;
    }
    return (
      <div className="container-fluid detail">
        <div className="jumbotron justify-content-center">
          <h1 className="heading">{businessDetail.name}</h1>
        </div>
        <button className="btn btn-danger" onClick={this.changeStatus}>
          Back
        </button>
        <div>{businessDetail.display_phone}</div>
        <div>{businessDetail.location.address1}</div>
      </div>
    );
  }
}

export default DetailViewCard;
