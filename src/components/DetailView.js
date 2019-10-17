import React, { Component } from 'react';
import axios from 'axios';
import DetailViewCard from './DetailViewCard';
import { yelpAPI } from '../config';

class DetailView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
    this.onDetailChange = this.onDetailChange.bind(this);
  }

  onDetailChange = async id => {
    let businessId = id;
    const response = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/${businessId}`,
      {
        headers: {
          Authorization: yelpAPI
        }
      }
    );
    this.setState({ businessDetail: response.data, show: true });
    console.log(this.state.businessDetail);
  };

  getShowStatus = status => {
    this.setState({
      show: status
    });
  };

  render() {
    if (this.props.info !== '' && this.state.show === true) {
      return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <DetailViewCard
                {...this.state}
                {...this.props}
                callbackFromParent={this.getShowStatus}
              />
            </div>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default DetailView;
