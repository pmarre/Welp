import React, { Component } from 'react';
import Card from '../components/Card';
import DetailView from '../components/DetailView';

class ContentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickId: ''
    };
  }

  componentDidMount() {
    this.setState({
      searchItem: this.props.searchItem,
      userLocation: this.props.userLocation,
      businesses: this.props.businesses
    });
  }

  getBusinessId = idFromChild => {
    this.setState({
      clickId: idFromChild
    });
  };

  render() {
    let businesses = this.props.businesses;
    if (businesses == null) {
      return null;
    }
    return (
      <div className="container-fluid justify-content-center">
        <Card
          businesses={this.props.businesses}
          callbackFromParent={this.getBusinessId}
        />
        <DetailView info={this.state.clickId} ref="sibling" />
      </div>
    );
  }
}

export default ContentContainer;
