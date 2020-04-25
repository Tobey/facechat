
// https://www.nexmo.com/blog/2019/07/16/opentok-react-components-dr
// https://medium.com/@a.carreras.c/using-semantic-ui-react-your-react-js-app-523ddc9abeb3
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/home';
import Chat from './pages/chat';
import SignUp from './pages/signup';
import 'semantic-ui-css/semantic.min.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Amplify from 'aws-amplify'
import config from  './aws-exports'

Amplify.configure(config)

  const routes = (
    <Router  >
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route exact  path="/chat/" component={ Chat } />
      <Route  path="/signup/" component={ SignUp } />
    </Switch>

  </Router>
  )
  
ReactDOM.render(routes, document.getElementById('root'));
