import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom';


import './style.css';
import Home from './components/home/Home';
import Nav from './components/nav/Nav';
import PageNotFound from './components/PageNotFound';

ReactDOM.render(
  <React.StrictMode>
     <Router>
    <Nav/>
    <Switch>
      <Route exact path="/">
          <Home/>
      </Route>
      <Route path="*">
          <PageNotFound />
      </Route>
    </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
