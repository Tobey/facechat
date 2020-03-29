import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/home';
import Chat from './pages/chat';
import SignUp from './pages/signup';

import 'semantic-ui-css/semantic.min.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// https://www.nexmo.com/blog/2019/07/16/opentok-react-components-dr
// https://medium.com/@a.carreras.c/using-semantic-ui-react-your-react-js-app-523ddc9abeb3


  const routes = (
    <Router  >
       <Switch>
    <Route exact path="/" component={ Home } />
    <Route  path="/chat/" component={ Chat } />
    <Route  path="/signup/" component={ SignUp } />
    </Switch>

  </Router>
  )


ReactDOM.render(routes, document.getElementById('root'));
