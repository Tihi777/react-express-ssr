import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Pages from '../../pages'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import './App.scss';

export const App = () => {
  return (
    <>
      <Header/>
      <div className="main">
        <Switch>
          {Object.keys(Pages).map(route => (
            <Route key={route} {...Pages[route]}/>
          ))}
        </Switch>
      </div>
      <Footer/>
    </>
  );
}