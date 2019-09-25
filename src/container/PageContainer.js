import axios from 'axios';
import React, { Component } from 'react';
import Navigation from '../Components/Navigation';
import Header from '../Components/Header';
import CardSlider from '../Components/CardSlider';
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
