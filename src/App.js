import './App.scss';
import React, {useReducer} from 'react';
import {initialState, MainContext} from './MainContext';
import mainReducer from './reducer/MainReducer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Screen_Components/Header/Header';
import Home from './Screen/Home/Home';

const App =()=> {
	const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <Router>
      <MainContext.Provider value={[state, dispatch]}>
        <Header />
        <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            {/* <Route path="/about">
              <About />
            </Route> */}
        </Switch>
      </MainContext.Provider>
    </Router>
  );
}

export default App;
