import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import DetailView from './components/DetailView';

import './styles.css';

import Home from './container/Home';
import Search from './container/Search';
import SearchBar from './components/SearchBar';
import Navigation from './components/Navigation';
import FeaturedEvent from './components/FeaturedEvent';
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
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <div>
                <SearchBar
                  {...this.props}
                  {...this.state}
                  passUserLocation={this.getUserLocation}
                />
                <FeaturedEvent {...this.props} {...this.state} />
              </div>
            )}
          />
          <Route
            exact
            path="/search"
            render={props => (
              <div>
                <SearchBar
                  {...this.props}
                  {...this.state}
                  passUserLocation={this.getUserLocation}
                />
                <ContentContainer {...this.props} {...this.state} />
              </div>
            )}
          />
          <Route path="/search/:id" component={DetailView} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
