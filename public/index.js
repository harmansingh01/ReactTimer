import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import Main from './components/main';

import 'style-loader!css-loader!foundation-sites/dist/css/foundation.css';
import './styles/less/demo.less';
import Countdown from "./components/countdown";
import Timer from "./components/timer";
$(document).foundation();

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Countdown}/>
      <Route path="countdown" component={Countdown}/>
      <Route path="timer" component={Timer}/>
    </Route>
  </Router>
  , document.querySelector('.container')
);

