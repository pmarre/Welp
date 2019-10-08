import React, { Component } from 'react';

class DetailView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    if (this.props.info !== '') {
      console.log('worked');
    }
  }

  render() {
    console.log(this.props);
    return <div>{this.props.info}</div>;
  }
}

export default DetailView;
