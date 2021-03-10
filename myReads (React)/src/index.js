import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


// styles
import './index.css';

// components
import Home from './core/Home/Home'
import Nav from './core/Nav/Nav'
import Search from './core/Search/Search'

ReactDOM.render(
  <React.StrictMode>  
    <Router>
     <Nav />
    <Switch>
      <Route exact path="/">
          <Home/>
      </Route> 
      <Route exact path="/search">
          <Search/>
      </Route>     
    </Switch>
    </Router>
  </React.StrictMode>,
  
  document.getElementById('root')
);