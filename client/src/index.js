/* global process */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store, history } from './store/store';

import App from './components/App';
import * as serviceWorker from './serviceWorker';
import './vendors/_metronic/_assets/plugins/line-awesome/css/line-awesome.css';
import './vendors/_metronic/_assets/plugins/flaticon/flaticon.css';
import './vendors/_metronic/_assets/plugins/flaticon2/flaticon.css';

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
