import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { Component } from 'react';

import FilterContainer from './container/FilterContainer';

import SearchBar from './components/SearchBar';
import Navigation from './components/Navigation';
import './styles.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      long: null,
      lat: null,
      status: false
    };
  }
  componentDidMount() {
    this.getLocation();
  }

  getLocation = () => {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          long: position.coords.longitude,
          lat: position.coords.latitude,
          status: true
        });
      },
      err => console.log(err)
    );
  };

  render() {
    return (
      <div className="wrapper">
        <Navigation />
        <SearchBar {...this.state} />
      </div>
    );
  }
}
export default App;
