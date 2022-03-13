import './App.scss';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Screen_Components/Header/Header';

const App =()=> {
  return (
    <Router>
      <Header />
      <Switch>
        
          {/* <Route path="/about">
            <About />
          </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
