import thunk from 'redux-thunk';

import React from 'react';
import MainTabBar from './src/navigation/main_tab_bar';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider, connect } from 'react-redux';

import reducers from './src/reducers';

// disable really annoying in app warnings
console.disableYellowBox = true;

const store = createStore(reducers, {}, compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
));

const App = (props) => {
  return (
  <Provider store={store}>
    <MainTabBar />;
  </Provider>)
};


export default App;
