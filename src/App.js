import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { Component } from 'react';
import { BrowserRouter, Switch, Router, Route } from 'react-router-dom';
import DetailView from './components/DetailView';

import SearchBar from './components/SearchBar';
import Navigation from './components/Navigation';
import './styles.css';
import FeaturedEvent from './components/FeaturedEvent';
import DetailViewCard from './components/DetailViewCard';
import ContentContainer from './container/ContentContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      long: null,
      lat: null,
      status: false,
      userLocation: 'San Francisco, CA'
    };
  }

  getUserLocation = location => {
    this.setState({
      userLocation: location
    });
  };

  render() {
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
    console.log(this.props);
    return (
      <BrowserRouter>
        <Navigation />
        <SearchBar {...this.state} passUserLocation={this.getUserLocation} />
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <FeaturedEvent
                {...props}
                userLocation={this.state.userLocation}
              />
            )}
          />
          <Route exact path="/search/:id" />
          <Route path="/search/:id">
            <DetailView info="test" ref="sibling" />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
