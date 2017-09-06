import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';

import configureStore from './store/store';
import App from './components/app';

const Root = ({store}) => (
  <Provider store = {store}>
    <HashRouter>
      <App/>
    </HashRouter>
  </Provider>
);

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');
  window.getState = store.getState;
  ReactDOM.render(<Root store = {store}/>, root);

});
