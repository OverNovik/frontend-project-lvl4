// @ts-check

import 'core-js/stable/index.js';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'regenerator-runtime/runtime.js';
import store from './App/slices/index.js';
import '../assets/application.scss';
import App from './App/App.jsx';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#chat')
)

