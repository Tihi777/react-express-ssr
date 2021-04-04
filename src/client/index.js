import React from 'react'
import { hydrate } from 'react-dom';
import { loadableReady } from '@loadable/component'

import { App } from '../components/App/App.js';

loadableReady(() => {
  hydrate(<App/>, document.getElementById('root'));
})
