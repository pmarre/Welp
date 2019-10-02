import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUserLocation } from './Actions/UserActions';

class App extends Component {
  constructor(props) {
    super(props);

    this.onUpdateUserLocation = this.onUpdateUserLocation.bind(this);
  }

  onUpdateUserLocation(event) {
    this.props.onUpdateUserLocation(event.target.value);
  }

  render() {
    console.log(this.props);
    return (
      <div className="App">
        <div>Container</div>
        <input onChange={this.onUpdateUserLocation} />
        {this.props.userLocation}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  searchItem: state.searchItem,
  userLocation: state.userLocation
});

const mapActionsToProps = {
  onUpdateUserLocation: updateUserLocation
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(App);
