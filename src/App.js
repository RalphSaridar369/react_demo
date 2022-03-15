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
import { BuyerRoutes, NormalRoutes, SellerRoutes } from './Routes';
import ProtectedBuyer from './Protected/ProtectedBuyer';
import ProtectedSeller from './Protected/ProtectedSeller';

const App = () => {

  const [state, dispatch] = useReducer(mainReducer, initialState);

  const mapNormalRoutes = (data) => {
    return data.map((item, index) => {
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
        {mapNormalRoutes(NormalRoutes)}
        <Route element={<ProtectedBuyer/>}>
          {mapNormalRoutes(BuyerRoutes)}
        </Route>
        <Route element={<ProtectedSeller/>}>
          {mapNormalRoutes(SellerRoutes)}
        </Route>
      </Routes>
    </MainContext.Provider>
  );
}

export default App;
