import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Pages from '../../pages'

import './App.scss';

export const App = () => {
  return (
    <Switch>
      {Object.keys(Pages).map(route => (
        <Route key={route} {...Pages[route]}/>
      ))}
    </Switch>
  );
}