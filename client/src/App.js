import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import Header from "./components/Header"

const App = () => (
  
  <Router>
    <div>
      <Header />
      
        <Route exact path="/" component={Home} />
        <Route exact path="/saved" component={Saved} />
      
      
    </div>
  </Router>
);

export default App;
