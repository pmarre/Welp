import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { Component } from 'react';

import SearchBar from './components/SearchBar';
import Navigation from './components/Navigation';
import './styles.css';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Navigation />
        <SearchBar />
      </div>
    );
  }
}

export default App;
