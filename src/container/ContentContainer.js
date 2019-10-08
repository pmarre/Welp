import React, { Component } from 'react';
import Card from '../components/Card';

class ContentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.setState({
      searchItem: this.props.searchItem,
      userLocation: this.props.userLocation,
      businesses: this.props.businesses
    });
  }

  onMoreDetail(id) {}

  render() {
    let businesses = this.props.businesses;
    console.log(businesses);
    if (businesses == null) {
      return null;
    }
    return (
      <div className="container-fluid justify-content-center">
        <Card businesses={this.props.businesses} />
      </div>
    );
  }
}

export default ContentContainer;
