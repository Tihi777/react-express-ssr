import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { appReducer } from "./app/reducer";

export const createRootReducer = history => combineReducers({
  app: appReducer,
  router: connectRouter(history),
})