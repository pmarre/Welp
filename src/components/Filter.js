import React, { Component } from 'react';
import $ from 'jquery';

class Filter extends Component {
  render() {
    switch (filter) {
      case '$':
        return <div>$</div>;
      case '$$':
        return <div>$$</div>;
      case '$$$':
        return <div>$$$</div>;
      case '$$$$':
        return <div>$$$$</div>;
    }
  }
}

export default Filter;
