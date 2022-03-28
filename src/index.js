import React from 'react';
import ReactDOM from 'react-dom';
import ImageContainer from './containers/ImageContainer/ImageContainer';
import Settings from './containers/Settings/Settings';
import reducer from './redux/reducer/index.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware()));

ReactDOM.render(
  <Provider store={store}>
    <Settings />
  </Provider>,
  document.getElementById('root')
);
ReactDOM.render(
  <Provider store={store}>
    <ImageContainer />
  </Provider>,
  document.getElementById('image-placeholder')
);
