import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/home';
import Chat from './pages/chat';
import Simple from './pages/simple';

import 'semantic-ui-css/semantic.min.css';
import { Route} from 'react-router';

import { BrowserRouter as Router } from 'react-router-dom'

// https://www.nexmo.com/blog/2019/07/16/opentok-react-components-dr
// https://medium.com/@a.carreras.c/using-semantic-ui-react-your-react-js-app-523ddc9abeb3


  const routes = (
    <Router  >
    {/* <Route component={App} /> */}
    <Route component={ Simple } />
  </Router>
  )


ReactDOM.render(routes, document.getElementById('root'));
