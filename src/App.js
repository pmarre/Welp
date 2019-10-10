import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { Component } from 'react';

import SearchBar from './components/SearchBar';
import Navigation from './components/Navigation';
import './styles.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      long: null,
      lat: null
    };
  }
  render() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          long: position.coords.longitude,
          lat: position.coords.latitude
        });
      },
      err => console.log(err)
    );

    return (
      <div className="wrapper">
        <Navigation />
        <SearchBar {...this.state} />
      </div>
    );
  }
}
export default App;
