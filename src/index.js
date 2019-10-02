import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import userReducer from './Reducers/UserReducer';
import productsReducer from './Reducers/ProductReducers.js';

import App from './App';

const allReducers = combineReducers({
  searchItem: productsReducer,
  userLocation: userReducer
});

const store = createStore(
  allReducers,
  {
    searchItem: 'Tacos',
    userLocation: 'San Francisco, CA'
  },
  window.window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.window.__REDUX_DEVTOOLS_EXTENSION__()
);

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
