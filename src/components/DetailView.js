import React, { Component } from 'react';
import DetailViewCard from './DetailViewCard';
import { yelpAPI } from '../config';

class DetailView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  onDetailChange = async id => {
    let businessId = id;
    let url = new URL(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/${businessId}`
    );
    fetch(url, {
      headers: {
        Authorization: yelpAPI
      }
    })
      .then(res => res.json())
      .then(response => {
        this.setState({ businessDetail: response, show: true });
      });
  };

  componentDidMount() {
    if (
      Object.entries(this.props).length !== 0 &&
      this.props.constructor === Object
    ) {
      this.onDetailChange(this.props.match.params.id);
    }
  }

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
