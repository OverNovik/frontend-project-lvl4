// @ts-check

import 'core-js/stable/index.js';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import io from 'socket.io-client';
import 'regenerator-runtime/runtime.js';
import store from './App/slices/index.js';
import '../assets/application.scss';
import init from './App/index.jsx';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

const app = async () => {
  console.log('start');
  const socket = io();

  const application = await init(socket);

  ReactDOM.render(
    <Provider store={store}>
      {application}
    </Provider>,
    document.querySelector('#chat'),
  );
};

app();
