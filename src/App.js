import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React, { Component } from "react";
import SearchBar from "./Components/SearchBar";
import Navigation from "./Components/Navigation";
import "./styles.css";

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Navigation />
        <div className="container-fluid">
          <div>{this.props.businesses}</div>
          <div className="jumbotron">
            Welp.
            <br />
            <SearchBar />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
