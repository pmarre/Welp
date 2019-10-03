import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let businesses = this.props.businesses;
    if (businesses == null) {
      return null;
    }
    let results = Object.values(businesses);
    let renderList = businesses.forEach(business, i => {
      <li key={i}>{business}</li>;
    });
    console.log(businesses);
    let keys = Object.values(businesses.id);
    let results2 = results.map(result => `<li key=${keys}>${result}</li>`);
    return (
      <div>
        <ul>
          <li>test</li>
          {renderlist}
        </ul>
      </div>
    );
  }
}

export default Card;
