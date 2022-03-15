import './App.scss';
import React, { useReducer } from 'react';
import { initialState, MainContext } from './MainContext';
import mainReducer from './reducer/MainReducer';
import {
  Routes,
  Route
} from "react-router-dom";
import Header from './Screen_Components/Header/Header';
import Home from './Screen/Home/Home';
import { NormalRoutes } from './Routes';

const App = () => {

  const [state, dispatch] = useReducer(mainReducer, initialState);

  const mapNormalRoutes = () => {
    return NormalRoutes.map((item, index) => {
      let element;
      if (item.header == true) {
        element = <>
          <Header />
          {item.component}
        </>
      }
      else
        element = item.component
      return <Route path={item.path} exact={item.exact} key={index} element={element} />
    })
  }

  return (
    <MainContext.Provider value={[state, dispatch]}>
      <Routes>
        {mapNormalRoutes()}
      </Routes>
    </MainContext.Provider>
  );
}

export default App;
