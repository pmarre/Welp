import React, { Component } from 'react';

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
