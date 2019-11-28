/* global process */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store, history } from './store/store';

import App from './components/App';
import * as serviceWorker from './serviceWorker';

const env = {
  network: process.env.REACT_APP_ETH_NETWORK || 'development', // Default to Ganache CLI
  history
};

ReactDOM.render(
  <Provider store={store}>
    <App {...env} />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
