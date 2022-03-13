import './App.scss';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Screen_Components/Header/Header';
import Home from './Screen/Home/Home';

const App =()=> {
  return (
    <Router>
      <Header />
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {/* <Route path="/about">
            <About />
          </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
