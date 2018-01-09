import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './Routes/routes';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

/**
 * @description The entry point - this will render the application with it's 
 * route on the DOM
 * @returns {void}
 */

render( 
  <Router 
    routes = { routes }
    history = { browserHistory } />,
    document.getElementById('app')
);