import React, { Component } from 'react';
import $ from 'jquery';

class DetailViewCard extends Component {
  render() {
    function returnToSearch() {
      $('.detail').css('display', 'none');
      $('.businessCard').css('display', 'block');
    }
    let businessDetail = this.props.businessDetail;
    console.log(this.props);
    if (businessDetail == null) {
      return <div>Empty</div>;
    }
    return (
      <div className="container-fluid detail">
        <div className="jumbotron justify-content-center">
          <h1 className="heading">{businessDetail.name}</h1>
        </div>
        <button className="btn btn-danger" onClick={returnToSearch}>
          Back
        </button>
        <div>{businessDetail.display_phone}</div>
        <div>{businessDetail.location.address1}</div>
      </div>
    );
  }
}

export default DetailViewCard;
