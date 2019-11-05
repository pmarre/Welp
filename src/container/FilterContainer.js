import React, { Component } from 'react';

class FilterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterPrice: ''
    };
  }

  handleClick = e => {
    this.setState({
      filterPrice: e.target.value
    });
    setTimeout(console.log(this.state), 2000);
  };

  render() {
    return (
      <div className="container-fluid mb-5">
        <div className="btn-group" role="group" aria-label="filters">
          <button
            type="button"
            className="btn btn-outline-dark"
            value="$"
            onClick={this.handleClick}>
            $
          </button>
          <button
            type="button"
            className="btn btn-outline-dark"
            value="$$"
            onClick={this.handleClick}>
            $$
          </button>
          <button
            type="button"
            className="btn btn-outline-dark"
            value="$$$"
            onClick={this.handleClick}>
            $$$
          </button>
          <button
            type="button"
            className="btn btn-outline-dark"
            value="$$$$"
            onClick={this.handleClick}>
            $$$$
          </button>
        </div>
      </div>
    );
  }
}

export default FilterContainer;
