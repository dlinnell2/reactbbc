import React, { Component } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Saved from './pages/Saved';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => (

  <div>

    <Header />

    <Router>

      <Route exact path='/' component={Home} />
      <Route exact path='/saved' component={Saved} />

    </Router>

  </div>
  
);


export default App;
