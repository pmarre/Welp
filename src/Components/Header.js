import React, { Component } from "react";
import SearchBar from "./SearchBar";

class Header extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div>{this.props.businesses}</div>
        <div className="jumbotron">
          Welp.
          <br />
          <SearchBar />
        </div>
      </div>
    );
  }
}

export default Header;
