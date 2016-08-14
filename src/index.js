import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import About from './components/about/About'
import Home from './components/home/Home'
import Product from './components/product/Product'
import { Provider } from 'react-redux'
import store from './store';

ReactDOM.render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/about" component={About} />
        <Route path="/product/:id" component={Product} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'));
