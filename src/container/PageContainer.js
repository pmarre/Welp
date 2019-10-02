import React, { Component } from './node_modules/react';
import Navigation from '../Components/Navigation';
import Header from '../Components/Header';
import BusinessList from '../Components/BusinessList';

class PageContainer extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Header />
        <BusinessList />
      </div>
    );
  }
}

export default PageContainer;
