import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import Main from './components/main';

import css from 'style!css!foundation-sites/dist/css/foundation.css';
$(document).foundation();

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
    </Route>
  </Router>
  , document.querySelector('.container'));

