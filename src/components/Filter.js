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
    return (
      <input type="button" className="btn-primary" value="$">
        $
      </input>
    );
  }
}

export default Filter;
