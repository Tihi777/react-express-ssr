import React from 'react'
import { hydrate } from 'react-dom';
import { App } from '../components/App.js';

hydrate(<App/>, document.getElementById('root'));