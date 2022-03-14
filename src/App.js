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
import { Routes } from './Routes';

const App =()=> {

	const [state, dispatch] = useReducer(mainReducer, initialState);

  const mapRoutes =()=>{
    return Routes.map((item,index)=>{
      switch (item.type){
        case 'normal':
          return <Route path={item.path} exact={item.exact} key={index}>
            {item.header && <Header/>}
            {item.component}
          </Route>
      }
    })
  }

  return (
    <Router>
      <MainContext.Provider value={[state, dispatch]}>
        <Switch>
            {mapRoutes()}
        </Switch>
      </MainContext.Provider>
    </Router>
  );
}

export default App;
