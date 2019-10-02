import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id
    };
  }
  render() {
    console.log(this.state);
    return <div>{this.state.id}</div>;
  }
}

export default Card;
