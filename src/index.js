import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './Components/Navigation';
import Header from './Components/Header';
import CardSlider from './Components/CardSlider';

import './styles.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      {/* <CardSlider title="Best Tacos in Bay Area:" /> */}
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
