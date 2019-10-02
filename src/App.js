import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateUserLocation } from './actions/UserActions';
import Navigation from './components/Navigation';
import BusinessList from './components/BusinessList';
import Header from './components/Header';

class App extends Component {
  constructor(props) {
    super(props);

    this.onUpdateUserLocation = this.onUpdateUserLocation.bind(this);
  }

  onUpdateUserLocation(event) {
    this.props.onUpdateUserLocation(event.target.value);
  }

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
const mapStateToProps = (state, props) => {
  return {
    searchItem: state.searchItem,
    userLocation: state.userLocation,
    locationPlusSearch: `${state.userLocation} ${props.randomProp}`
  };
};

const mapActionsToProps = (dispatch, props) => {
  console.log(props);
  return bindActionCreators(
    {
      onUpdateUserLocation: updateUserLocation
    },
    dispatch
  );
};

const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
  console.log(propsFromState, propsFromDispatch, ownProps);
  return {};
};

export default connect(
  mapStateToProps,
  mapActionsToProps,
  mergeProps
)(App);
