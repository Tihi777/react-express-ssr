import React from 'react'
import {hydrate} from 'react-dom';
import {Provider as ReduxProvider} from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import {loadableReady} from '@loadable/component'
import {App} from '../components/App/App.js';
import {configureStore} from "../store/configureStore";

const { store, history } = configureStore(window.__INITIAL_STATE__);

loadableReady(() => {
  hydrate(
    <ReduxProvider store={store}>
      <ConnectedRouter history={history}>
        <App/>
      </ConnectedRouter>
    </ReduxProvider>,
    document.getElementById('root'));
})
