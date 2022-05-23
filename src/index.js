// @ts-check

import 'core-js/stable/index.js';
import React from 'react';
import ReactDOM from 'react-dom';
import 'regenerator-runtime/runtime.js';

import '../assets/application.scss';
import App from './App/App.jsx';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

const applicationRender = () => {
  ReactDOM.render(<App />, document.querySelector('#chat'));
}

applicationRender();
