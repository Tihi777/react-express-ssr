import React, {useState} from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from '../../routes'

import './App.scss';

export const App = () => {
  return (
    <Switch>
      {routes.map((routeProps) => (
        <Route key={routeProps.path} {...routeProps} />
      ))}
    </Switch>
  );
}