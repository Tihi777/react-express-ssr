import { applyMiddleware, compose, createStore } from 'redux';
import { createBrowserHistory, createMemoryHistory } from "history";
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';

import { isServer } from "../utils/commonUtils";
import { createRootReducer } from "./rootReducer";

const getComposeEnhancers = () => {
  if (process.env.NODE_ENV !== 'production' && !isServer) {
    return window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  }

  return compose;
}

export const configureStore = (initialState, url = '/') => {
  const history = isServer
    ? createMemoryHistory({ initialEntries: [url] })
    : createBrowserHistory();

  const composeEnhancers = getComposeEnhancers();
  const middlewares = [routerMiddleware(history), thunk];

  const store = createStore(
    createRootReducer(history),
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  return { store, history };
}