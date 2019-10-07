import React, { Component } from 'react';
import Card from '../components/Card';

class ContentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.state);
    return <Card {...this.state} />;
  }
}

export default ContentContainer;
